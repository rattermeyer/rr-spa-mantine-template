import {AuthenticationForm} from "~/modules/authentication/ui/authentication-form";
import "./login.module.css";
import {zodResolver} from "@hookform/resolvers/zod";
import {getValidatedFormData} from "remix-hook-form";
import {AuthenticationFormData} from "~/shared/infrastructure/web/authentication-form-data";
import type {Route} from "./+types/login-form";
import type {Account} from '~/shared/domain/account.model';

const resolver = zodResolver(AuthenticationFormData);

export const action = async ({request}: Route.ActionArgs) => {
    const {
        errors,
        data,
        receivedValues: defaultValues,
    } = await getValidatedFormData<AuthenticationFormData>(request, resolver);
    if (errors) {
        return {errors, defaultValues};
    }
    switch (data.action) {
        case "login":
            // handle login
            console.log(data);
            break;
        case "register":
            // handle register
            console.log(data);
            break;
        case "sso": {
            // handle sso
            console.log(data);
            const user : Account = {
                uuid: "123",
                name: "John Doe",
                email: "john.doe@example.com",
                emailVerified: true,
                roles: [],
                preferences: [],
            }
            console.log(user);
            break;
        }
    }
    return;
};

export default function LoginForm() {
    return <AuthenticationForm/>;
}
