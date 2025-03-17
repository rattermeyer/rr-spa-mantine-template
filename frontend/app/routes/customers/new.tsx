import {zodResolver} from "@hookform/resolvers/zod";
import {Button, Flex, SimpleGrid, Stack, TextInput} from "@mantine/core";
import {TbDeviceFloppy} from "react-icons/tb";
import {Form, redirect} from "react-router";
import {type CreateCustomer, createCustomer,} from "~/shared/domain/customer.model";
import type {Route} from "./+types/new";
import {useRemixForm} from 'remix-hook-form';

const resolver = zodResolver(createCustomer);

export async function clientAction({request}: Route.ClientActionArgs) {
    // TODO POST to server
    return redirect("/customers");
}

export default function NewCustomer({loaderData}: Route.ComponentProps) {
    const {
        handleSubmit,
        formState: {errors, isSubmitting},
        register,
    } = useRemixForm<CreateCustomer>({
        resolver,
    });
    return (
        <div>
            <Form onSubmit={handleSubmit} method={"post"}>
                <Stack gap={"md"}>
                    <SimpleGrid cols={2}>
                        <TextInput
                            label={"First Name"}
                            {...register("firstName")}
                            error={errors.firstName?.message}
                        />
                        <TextInput
                            label={"Last Name"}
                            {...register("lastName")}
                            error={errors.lastName?.message}
                        />
                        <TextInput
                            label={"Email"}
                            {...register("email")}
                            error={errors.email?.message}
                        />
                    </SimpleGrid>
                    <Flex>
                        <Button
                            type={"submit"}
                            leftSection={<TbDeviceFloppy size={20}/>}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Submitting" : "Create"}
                        </Button>
                    </Flex>
                </Stack>
            </Form>
        </div>
    );
}
