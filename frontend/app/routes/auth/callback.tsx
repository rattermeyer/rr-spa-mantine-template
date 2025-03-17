import {redirect} from "react-router";
import {commitSession, getSessionFromRequest,} from "~/shared/services/session.server";
import type {Route} from "./+types/callback";
import type {Account} from '~/shared/domain/account.model';

export async function clientLoader({request}: Route.LoaderArgs) {
    const user: Account = {
        uuid: "123",
        email: "john.doe@example.com",
        name: "John Doe",
        emailVerified: true,
        roles: [],
        preferences: [],
    }
    const session = await getSessionFromRequest(request);
    console.log(`session id: ${session.id}`);
    if (!user) {
        throw new Error("Failed to authenticate user");
    }
    session.set("user", user);
    const returnTo = session.get("returnTo");
    session.unset("returnTo");
    const headers = new Headers({
        "Set-Cookie": await commitSession(session),
    });
    return redirect(returnTo || "/dashboard", {headers});
}
