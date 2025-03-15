import type { Kysely } from "kysely";
import { container } from "~/inversify-config.server";
import { CustomerListPage } from "~/pages/customer-list-page/customer-list-page";
import type { CustomerRepository } from "~/pages/customer-list-page/domain/customer.repository";
import type { DB } from "~/shared/infrastructure/db/model/kysely/tables";
import { authenticate } from "~/shared/services/auth.server";
import type { Route } from "./+types/index";

const repository = container.get<(kysely?: Kysely<DB>) => CustomerRepository>(
	"Factory<CustomerRepository>",
)();

export async function loader({ request }: Route.LoaderArgs) {
	await authenticate(request, "/customers");
	const customers = await repository.loadCustomers();
	return { customers };
}

export default function CustomerList({ loaderData }: Route.ComponentProps) {
	const { customers } = loaderData;
	return <CustomerListPage customers={customers} />;
}
