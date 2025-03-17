import type { CustomerRepository } from "~/modules/customer/domain/customer.repository";
import type { CreateCustomer, Customer } from "~/shared/domain/customer.model";
import { filterNonNullAttributes } from "~/shared/object-handler";

export class CustomerRepositoryImpl implements CustomerRepository {

	async loadCustomers(): Promise<Customer[]> {
        throw new Error("Method not implemented.");
	}

	async findCustomerById(customerId: number): Promise<Customer | undefined> {
        throw new Error("Method not implemented.");
	}

	async updateCustomer(customer: Customer): Promise<Customer | undefined> {
		const nonNullData = filterNonNullAttributes(customer);
        throw new Error("Method not implemented.");
	}

	async deleteByCustomerId(customerId: number): Promise<void> {
        throw new Error("Method not implemented.");
	}

	async createCustomer(customer: CreateCustomer): Promise<Customer> {
        throw new Error("Method not implemented.");
	}
}
