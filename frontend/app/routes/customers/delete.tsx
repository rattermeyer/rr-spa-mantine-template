import { redirect } from "react-router";
import { z } from "zod";
import { zfd } from "zod-form-data";
import { container } from "~/inversify-config";
import { CustomerService } from "~/shared/domain/customer-service";
import type { Route } from "./+types/delete";

const schema = zfd.formData({ id: z.string() });
const service = container.get<CustomerService>(CustomerService);

export async function action({ request, params }: Route.ClientActionArgs) {
	const { id } = schema.parse(await request.formData());
	console.log(`delete customer with id ${id}`);
	await service.deleteCustomer(Number.parseInt(id));
	return redirect("/customers");
}
