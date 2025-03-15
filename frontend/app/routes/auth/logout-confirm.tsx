import { LogoutBanner } from "~/components/LogoutBanner/logout-banner";
import { getUserFromRequest } from "~/shared/services/session.server";
import type { Route } from "./+types/logout-confirm";

export async function loader({ request }: Route.LoaderArgs) {
	const account = await getUserFromRequest(request);
	console.log(account);
	if (account) {
		throw new Error("You should have been logged out");
	}
}

export default function LogoutConfirm() {
	return <LogoutBanner />;
}
