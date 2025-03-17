import {zodResolver} from "@hookform/resolvers/zod";
import {Button, Container, Select, Stack} from "@mantine/core";
import {Controller} from "react-hook-form";
import {data, Form, redirect} from "react-router";
import {getValidatedFormData, useRemixForm} from "remix-hook-form";
import {z} from "zod";
import {container} from "~/inversify-config";
import {AccountRepository} from "~/modules/authentication/domain/account.repository";
import type {Route} from "./+types/profile";
import type {Account} from "~/shared/domain/account.model";
import type {Preference} from '~/shared/domain/preference.model';

const accountRepository = container.get<AccountRepository>(AccountRepository.type);

const schema = z.object({
    lang: z.enum(["en", "de"]),
});

const resolver = zodResolver(schema);

export async function clientLoader({request}: Route.LoaderArgs) {
    const account: Account = {
        uuid: "123",
        email: "john.doe@example.com",
        name: "John Doe",
        emailVerified: true,
        roles: [],
        preferences: [],
    }
    account.preferences =
        (await accountRepository.findPreferencesByUuid(
            account.uuid,
            "general",
            "lang",
        )) || [];
    return {account};
}

export async function clientAction({request}: Route.ActionArgs) {
    const {
        errors,
        receivedValues: defaultValues,
        data: formData,
    } = await getValidatedFormData(request, resolver);
    if (errors) {
        return data({errors, defaultValues: formData}, {status: 400});
    }
    await accountRepository.updatePreference(
        "123",
        "general",
        "lang",
        formData.lang,
    );
    return redirect("/profile");
}

export default function ProfileRoute({loaderData}: Route.ComponentProps) {
    const {account} = loaderData;
    const {
        handleSubmit,
        formState: {errors},
        register,
        control,
    } = useRemixForm({
        resolver,
        defaultValues: {lang: "en" as "en" | "de"},
    });
    const lang = "en";
    return (
        <div>
            <h1>Profile</h1>
            <p>Email: {account.email}</p>
            <p>Langauge: {lang}</p>
            <Container size={"md"}>
                <Form onSubmit={handleSubmit} method={"post"}>
                    <Stack gap={"md"}>
                        <Controller
                            control={control}
                            render={({field}) => (
                                <Select
                                    {...field}
                                    data={[
                                        {
                                            value: "en",
                                            label: "English",
                                        },
                                        {
                                            value: "de",
                                            label: "German",
                                        },
                                    ]}
                                    placeholder={"Select language"}
                                    defaultValue={lang}
                                />
                            )}
                            name={"lang"}
                        />
                        <Button type={"submit"}>Save</Button>
                    </Stack>
                </Form>
            </Container>
        </div>
    );
}
