import type { Kysely, Transaction } from "kysely";
import type { DB } from "kysely-codegen";

export class TransactionExecutorImpl {
	constructor(private db: Kysely<DB>) {}
	async execute<T>(fn: (tx: Transaction<DB>) => Promise<T>): Promise<T> {
		return this.db.transaction().execute(async (tx) => {
			return fn(tx);
		});
	}
}
