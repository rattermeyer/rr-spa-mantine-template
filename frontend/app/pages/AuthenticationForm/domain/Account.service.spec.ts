import {beforeEach,  describe, expect, test, vi} from 'vitest';
import {anyString, mock} from 'vitest-mock-extended';
import {AccountService} from './Account.service';
import type {Transaction} from 'kysely';
import type {DB} from 'kysely-codegen';
import type {AccountRepository} from '~/pages/AuthenticationForm/domain/Account.repository';
import type {Account} from '~/shared/domain/Account.model';

describe('AccountService', () => {
    const mockDb = {
        transaction: vi.fn().mockImplementation(() => ({
            execute: async (callback: Transaction<DB>) => await callback(mockDb)
        }))
    } as unknown as Transaction<DB>;
    const mockAccountRepository = mock<AccountRepository>();
    const accountRepositoryFactory = vi.fn().mockReturnValue(mockAccountRepository);
    const accountService = new AccountService(accountRepositoryFactory, mockDb);
    const createAccount: Account = {
        uuid: '123',
        name: 'Test User',
        emailVerified: false,
        email: 'test@example.com',
        passwordHash: 'password',
        roles: [],
        preferences: [],
    };

    beforeEach(async () => {
        await mockAccountRepository.createAccount.mock
        await mockAccountRepository.findAccountByEmail.mockReset();
    })

    test('getOrCreateAccount returns existing account', async () => {
        // search for account by email and return the account
        mockAccountRepository.findAccountByEmail.calledWith(createAccount.email).mockResolvedValue(createAccount)
        // then it should be returned
        const account = await accountService.getOrCreateAccount(createAccount);
        expect(account).toBe(createAccount);
        expect(mockDb.transaction).toHaveBeenCalled();
        expect(mockAccountRepository.findAccountByEmail).toHaveBeenCalledWith(createAccount.email);
    });
    
    test('getOrCreateAccount create non-existing account', async () => {
        // search for account by email and return the account
        mockAccountRepository.findAccountByEmail.calledWith(createAccount.email).mockResolvedValue(undefined)
        mockAccountRepository.createAccount.calledWith(createAccount).mockResolvedValue(createAccount)
        // then it should be returned
        const account = await accountService.getOrCreateAccount(createAccount);
        expect(account).toBe(createAccount);
        expect(mockDb.transaction).toHaveBeenCalled();
        expect(mockAccountRepository.createAccount).toHaveBeenCalledWith(createAccount);
    });
});
