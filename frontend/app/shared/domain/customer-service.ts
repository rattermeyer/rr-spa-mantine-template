import {
	LazyServiceIdentifer,
	LazyServiceIdentifier,
	inject,
	injectable,
} from "inversify";
import type { Kysely } from "kysely";
import { kyselySymbol } from "~/inversify-config.server";
import type { CustomerRepository } from "~/pages/customer-list-page/domain/customer.repository";
import type { InvoiceRepository } from "~/shared/domain/invoice-repository";
import type { DB } from "~/shared/infrastructure/db/model/kysely/tables";

@injectable()
export class CustomerService {
	constructor(
		@inject(new LazyServiceIdentifer(() => "Factory<CustomerRepository>"))
		private customerRepositoryFactory: (db: Kysely<DB>) => CustomerRepository,
		@inject(new LazyServiceIdentifier(() => "Factory<InvoiceRepository>"))
		private invoiceRepositoryFactory: (db: Kysely<DB>) => InvoiceRepository,
		@inject(new LazyServiceIdentifier(() => kyselySymbol))
		private db: Kysely<DB>,
	) {}

	async deleteCustomer(customerId: number): Promise<void> {
		await this.db.transaction().execute(async (tx) => {
			const customerRepository = this.customerRepositoryFactory(tx);
			const invoiceRepository = this.invoiceRepositoryFactory(tx);
			await invoiceRepository.deleteInvoiceByCustomerId(customerId);
			await customerRepository.deleteByCustomerId(customerId);
		});
	}
}
