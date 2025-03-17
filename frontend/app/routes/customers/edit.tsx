import {zodResolver} from "@hookform/resolvers/zod";
import {data, Form} from "react-router";
import {getValidatedFormData, RemixFormProvider, useRemixForm,} from "remix-hook-form";
import {CustomerForm} from "~/modules/customer/ui/customer-form";
import {type Customer, type UpdateCustomer, updateCustomer,} from "~/shared/domain/customer.model";
import {filterNonNullAttributes} from "~/shared/object-handler";
import type {Route} from "./+types/edit";

const resolver = zodResolver(updateCustomer);

export async function clientLoader({request, params}: Route.ClientLoaderArgs) {
    const {id = "0"} = params;
    const customer: Customer = {
        firstName: "John",
        lastName: "Doe",
        customerId: 1,
        email: "john.doe@example.com",
        address: null,
        phone: null,
        city: null,
        country: null,
        postalCode: null,
        company: null,
        fax: null,
        state: null
    }
    return {customer};
}

export async function clientAction({request, params}: Route.ClientActionArgs) {
    const {
        errors,
        data: resolvedData,
        receivedValues: defaultValues,
    } = await getValidatedFormData(request, resolver);
    if (errors) {
        return data({errors, defaultValues}, {status: 400});
    }
    console.log("resolvedData", resolvedData);
    const nonNullData = filterNonNullAttributes(resolvedData);
    console.log("nonNullData", nonNullData);
    throw new Error("Not implemented");
}

export default function EditCustomer({loaderData}: Route.ComponentProps) {
    const {customer} = loaderData;
    const form = useRemixForm<UpdateCustomer>({
        resolver,
        defaultValues: customer,
        mode: "onSubmit",
        reValidateMode: "onBlur",
    });
    const {handleSubmit} = form;
    return (
        <div>
            <RemixFormProvider {...form}>
                <Form onSubmit={handleSubmit} method={"post"}>
                    <CustomerForm editable={true}/>
                </Form>
            </RemixFormProvider>
        </div>
    );
}
