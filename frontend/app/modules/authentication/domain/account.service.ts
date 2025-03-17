import type {Account, CreateAccount} from "~/shared/domain/account.model";

export class AccountService {
    async createAccount(account: CreateAccount): Promise<Account | undefined> {
        throw new Error("Method not implemented.");
    }

    async getOrCreateAccount(
        createAccount: CreateAccount,
    ): Promise<Account | undefined> {
        throw new Error("Method not implemented.");
    }

    async verifyPassword(
        email: string,
        password: string,
    ): Promise<Account | undefined> {
        throw new Error("Method not implemented.");
    }
}

export namespace AccountService {
    export const type = Symbol.for("AccountService");
}
