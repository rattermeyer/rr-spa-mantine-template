import {injectable} from "inversify";
import type {AccountRepository} from "~/modules/authentication/domain/account.repository";
import type {Account as DomainAccount, CreateAccount, PreferenceEntry,} from "~/shared/domain/account.model";

@injectable()
export class AccountRepositoryImpl implements AccountRepository {

    async updatePreference(
        accountUuid: string,
        category: string,
        key: string,
        value: string,
    ): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findPreferencesByUuid(
        accountUuid: string,
        category?: string,
        key?: string,
    ): Promise<PreferenceEntry[] | undefined> {
        if (key && !category)
            throw new Error("Category must be provided when key is provided");
        throw new Error("Method not implemented.");
    }

    async createAccount(
        account: CreateAccount,
    ): Promise<DomainAccount | undefined> {
        throw new Error("Method not implemented.");
    }

    async findAccountByEmail(email: string): Promise<DomainAccount | undefined> {
        throw new Error("Method not implemented.");
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

    async findAccountByUuid(uuid: string): Promise<DomainAccount | undefined> {
        throw new Error("Method not implemented.");
    }
}
