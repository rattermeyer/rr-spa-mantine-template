import type {InvoiceRepository} from "~/shared/domain/invoice-repository";

export class InvoiceRepositoryImpl implements InvoiceRepository {

    async deleteInvoiceByCustomerId(customerId: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
