import { Paper } from "@mantine/core";
import { LogoutBanner } from "~/components/LogoutBanner/LogoutBanner";
import { getUserFromRequest } from "~/shared/services/session.server";
import type { Route } from "./+types/LogoutConfirm";
import classes from "./LogoutConfirm.module.css";

export async function loader({ request }: Route.LoaderArgs) {
	const account = await getUserFromRequest(request);
	console.log(account);
	if (account) {
		throw new Error("You should have been logged out");
	}
}

export default function LogoutConfirm() {
	return (
		<Paper shadow={"md"} className={classes.banner}>
			<LogoutBanner />
		</Paper>
	);
}
