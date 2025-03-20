import {CustomerRepository} from "~/modules/customer/domain/customer.repository";
import {inject, injectable} from 'inversify';

@injectable()
export class CustomerService {
    constructor(
        @inject(CustomerRepository.type)
        private customerRepository: CustomerRepository,
    ) {
    }

    async deleteCustomer(customerId: number): Promise<void> {
        console.log("deleteCustomer", customerId);
        await this.customerRepository.deleteByCustomerId(customerId);
    }
}
