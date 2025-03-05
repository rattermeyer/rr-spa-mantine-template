import { inject, injectable } from "inversify";
import type { Kysely } from "kysely";
import { kyselySymbol } from "~/InversifyConfig";
import type { AccountRepository } from "~/pages/AuthenticationForm/domain/Account.repository";
import type { Account, CreateAccount } from "~/shared/domain/Account.model";
import { kyselyBuilder } from "~/shared/infrastructure/db/db.server";
import type { DB } from "~/shared/infrastructure/db/kysely";

@injectable()
export class AccountRepositoryImpl implements AccountRepository {
	private db: Kysely<DB>;

	constructor(db?: Kysely<DB>) {
		this.db = db || kyselyBuilder();
	}

	async createAccount(account: CreateAccount): Promise<Account | undefined> {
		const result = await this.db
			.insertInto("account")
			.values({
				email: account.email,
				name: account.name,
				passwordHash: "",
			})
			.returning(["uuid", "email", "name"])
			.executeTakeFirst();
		if (!result) return undefined;
		return {
			uuid: result.uuid,
			email: result.email,
			name: result.name,
			emailVerified: true,
			passwordHash: "",
		};
	}

	async findAccountByEmail(email: string): Promise<Account | undefined> {
		return this.unique(
			await this.db
				.selectFrom("account")
				.where("email", "=", email)
				.limit(1)
				.selectAll()
				.execute(),
		);
	}

	async unique<T>(result: T[]): Promise<T | undefined> {
		if (result.length > 1) {
			throw new Error("Multiple results found");
		}
		if (result.length === 1) {
			return result[0];
		}
		return undefined;
	}

	async findAccountByUuid(uuid: string): Promise<Account | undefined> {
		throw new Error("Method not implemented.");
	}
}
