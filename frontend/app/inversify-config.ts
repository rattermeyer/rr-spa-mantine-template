import {Container} from "inversify";
import {CustomerRepository} from "~/modules/customer/domain/customer.repository";
import {CustomerRepositoryImpl} from "~/modules/customer/infrastructure/customer-repository-impl";
import {CustomerService} from "~/shared/domain/customer-service";
import {AccountRepository} from '~/modules/authentication/domain/account.repository';
import {AccountRepositoryImpl} from '~/modules/authentication/infrastructure/account-repository-impl';
import {AccountService} from '~/modules/authentication/domain/account.service';
import {InvoiceRepositoryImpl} from '~/shared/infrastructure/db/invoice-repository-impl';
import {InvoiceRepository} from '~/shared/domain/invoice-repository';
import {Configuration, CustomerControllerApi} from '~/shared/infrastructure/rest-client/backend';

export const container = new Container();

container
    .bind<AccountRepository>(AccountRepository.type)
    .to(AccountRepositoryImpl);

container
    .bind<AccountService>(AccountService.type).to(AccountService);

container
    .bind<CustomerRepository>(CustomerRepository.type).to(CustomerRepositoryImpl);

container.bind<CustomerService>(CustomerService).toSelf();

container.bind<InvoiceRepository>(InvoiceRepository.type).to(InvoiceRepositoryImpl);

container.bind<CustomerControllerApi>(CustomerControllerApi).toConstantValue(new CustomerControllerApi({
    basePath: "http://localhost:8080",
} as Configuration));
