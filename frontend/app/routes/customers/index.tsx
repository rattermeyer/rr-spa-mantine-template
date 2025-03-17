import {CustomerListPage} from "~/modules/customer/ui/customer-list-page";
import type {Route} from "./+types/index";
import {container} from '~/inversify-config';
import { CustomerRepository } from "~/modules/customer/domain/customer.repository";


const repository = container.get<CustomerRepository>(CustomerRepository.type);

export async function clientLoader({request}: Route.ClientLoaderArgs) {
    const customers = await repository.loadCustomers();
    return {customers};
}

export default function CustomerList({loaderData}: Route.ComponentProps) {
    const {customers} = loaderData;
    return <CustomerListPage customers={customers}/>;
}
