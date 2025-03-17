import {injectable,} from "inversify";
import type {CustomerRepository} from "~/modules/customer/domain/customer.repository";
import type {InvoiceRepository} from "~/shared/domain/invoice-repository";

@injectable()
export class CustomerService {
    constructor(
        private customerRepository: CustomerRepository,
        private invoiceRepository: InvoiceRepository,
    ) {
    }

    async deleteCustomer(customerId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
