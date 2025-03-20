export interface InvoiceRepository {
	deleteInvoiceByCustomerId(customerId: number): Promise<void>;
}

export namespace InvoiceRepository {
	export const type = Symbol.for("InvoiceRepository");
}
