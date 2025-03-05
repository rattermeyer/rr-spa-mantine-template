import type { interfaces } from "inversify";
import type { Account, CreateAccount } from "~/shared/domain/Account.model";

export interface AccountRepository {
	createAccount(account: CreateAccount): Promise<Account | undefined>;
	findAccountByEmail(email: string): Promise<Account | undefined>;
	findAccountByUuid(uuid: string): Promise<Account | undefined>;
}

export namespace AccountRepository {
	export const type: interfaces.ServiceIdentifier<AccountRepository> =
		Symbol.for("AccountRepository");
}
