import { Container } from "@mantine/core";
import { Outlet, redirect } from "react-router";
import { getUserFromRequest } from "~/shared/services/session.server";
import type { Route } from "./+types/login";

export async function loader({ request }: Route.LoaderArgs) {
	const user = await getUserFromRequest(request);
	if (user !== undefined) {
		return redirect("/dashboard");
	}
}

export default function LoginRoute() {
	return (
		<Container>
			<Outlet />
		</Container>
	);
}
