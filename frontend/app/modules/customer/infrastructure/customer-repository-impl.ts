import type {CustomerRepository} from "~/modules/customer/domain/customer.repository";
import type {CreateCustomer, Customer} from "~/shared/domain/customer.model";
import {filterNonNullAttributes} from "~/shared/object-handler";
import {CustomerEntityControllerApi} from '~/shared/infrastructure/rest-client/backend';
import {inject} from 'inversify';

export class CustomerRepositoryImpl implements CustomerRepository {

    constructor(@inject(CustomerEntityControllerApi) private customerApi: CustomerEntityControllerApi) {
    }

    async loadCustomers(): Promise<Customer[]> {
        const d: Customer[] | undefined = (await this.customerApi.getCollectionResourceCustomerGet()).embedded?.customers?.map((c) => {
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
        }})    ;
        return d ?? [];
    }

    async findCustomerById(customerId: number): Promise<Customer | undefined> {
        throw new Error("Method not implemented.");
    }

    async updateCustomer(customer: Customer): Promise<Customer | undefined> {
        const nonNullData = filterNonNullAttributes(customer);
        throw new Error("Method not implemented.");
    }

    async deleteByCustomerId(customerId: number): Promise<void> {
        await this.customerApi.deleteItemResourceCustomerDelete({
            id: String(customerId)
        })
    }

    async createCustomer(customer: CreateCustomer): Promise<Customer> {
        const result = await this.customerApi.postCollectionResourceCustomerPost({
            customerRequestBody: {
                ...customer
            },
        })
        // TODO
        return { ...result, customerId: 0 } as Customer;
    }
}
