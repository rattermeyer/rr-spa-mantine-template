import {inject, injectable,} from "inversify";
import {CustomerRepository} from "~/modules/customer/domain/customer.repository";
import type {InvoiceRepository} from "~/shared/domain/invoice-repository";

@injectable()
export class CustomerService {
    constructor(
        @inject(CustomerRepository.type)
        private customerRepository: CustomerRepository,
        private invoiceRepository: InvoiceRepository,
    ) {
    }

    async deleteCustomer(customerId: number): Promise<void> {
        console.log("deleteCustomer", customerId);
        await this.customerRepository.deleteByCustomerId(customerId);
    }
}
