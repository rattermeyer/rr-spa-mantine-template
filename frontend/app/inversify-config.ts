import {Container} from "inversify";
import {CustomerRepository} from "~/modules/customer/domain/customer.repository";
import {CustomerRepositoryImpl} from "~/modules/customer/infrastructure/customer-repository-impl";
import {CustomerService} from "~/shared/domain/customer-service";
import {AccountRepository} from '~/modules/authentication/domain/account.repository';
import {AccountRepositoryImpl} from '~/modules/authentication/infrastructure/account-repository-impl';
import {AccountService} from '~/modules/authentication/domain/account.service';
import {Configuration, CustomerEntityControllerApi} from '~/shared/infrastructure/rest-client/backend';

export const container = new Container();

container
    .bind<AccountRepository>(AccountRepository.type)
    .to(AccountRepositoryImpl);

container
    .bind<AccountService>(AccountService.type).to(AccountService);

container
    .bind<CustomerRepository>(CustomerRepository.type).to(CustomerRepositoryImpl);

container.bind<CustomerService>(CustomerService).toSelf();

container.bind<CustomerEntityControllerApi>(CustomerEntityControllerApi).toConstantValue(
    new CustomerEntityControllerApi(new Configuration({
        basePath: "http://localhost:8080",
        middleware: [],
    })))
