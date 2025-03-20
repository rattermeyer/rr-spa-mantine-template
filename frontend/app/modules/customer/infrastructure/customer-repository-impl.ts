import type {CustomerRepository} from "~/modules/customer/domain/customer.repository";
import type {CreateCustomer, Customer} from "~/shared/domain/customer.model";
import {filterNonNullAttributes} from "~/shared/object-handler";
import {inject} from 'inversify';
import type {Customer as CustomerDto} from '~/shared/infrastructure/rest-client/backend';
import {CustomerControllerApi} from '~/shared/infrastructure/rest-client/backend';
import type {AxiosResponse} from 'axios';

export class CustomerRepositoryImpl implements CustomerRepository {

    constructor(@inject(CustomerControllerApi) private customerApi: CustomerControllerApi) {
    }

    async loadCustomers(): Promise<Customer[]> {
        const d: AxiosResponse<CustomerDto[] | undefined> = (await this.customerApi.loadCustomers())
        return d.data?.map(this.undefinedSafe) || [];
    }

    async findCustomerById(customerId: number): Promise<Customer | undefined> {
        throw new Error("Method not implemented.");
    }

    async updateCustomer(customer: Customer): Promise<Customer | undefined> {
        const nonNullData = filterNonNullAttributes(customer);
        throw new Error("Method not implemented.");
    }

    async deleteByCustomerId(customerId: number): Promise<void> {
        await this.customerApi.deleteCustomerById(customerId);
    }

    async createCustomer(customer: CreateCustomer): Promise<Customer> {
        const result = await this.customerApi.createCustomer(customer)
        // TODO
        return {...result.data, customerId: 0} as Customer;
    }

    private undefinedSafe(c: CustomerDto) {
        return {
            customerId: c.customerId || 0,
            firstName: c.firstName || "",
            lastName: c.lastName || "",
            email: c.email || "",
            phone: c.phone || "",
            address: c.address || "",
            city: c.city || "",
            state: c.state || "",
            country: c.country || "",
            postalCode: c.postalCode || "",
            company: c.company || "",
            fax: c.fax || "",
        };
    }
}
