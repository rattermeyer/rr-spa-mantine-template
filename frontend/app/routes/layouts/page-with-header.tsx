import {AppShell, AppShellNavbar} from "@mantine/core";
import {useDisclosure, useHeadroom} from "@mantine/hooks";
import {Outlet} from "react-router";
import {FooterSimple} from "~/components/footer-simple";
import {HeaderMenu} from "~/components/header-menu";
import {NavbarNested} from "~/components/navbar/navbar-nested";
import type {Route} from "./+types/page-with-header";
import classes from "./page-with-header.module.css";
import type {Account} from '~/shared/domain/account.model';

export async function clientLoader({request}: Route.ClientLoaderArgs) {
    const user: Account = {
        uuid: "",
        name: "John Doe",
        email: "john.doe@example.com",
        preferences: [],
        emailVerified: true,
        roles: [],
    }
    return {user};
}

export default function PageWithHeader({loaderData}: Route.ComponentProps) {
    const {user} = loaderData;
    const headerHeight = 60;
    const [mobileOpened, {toggle: toggleMobile}] = useDisclosure();
    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure(true);
    const headerPinned = useHeadroom({fixedAt: 2 * headerHeight});

    return (
        <>
            <AppShell
                header={{height: headerHeight, collapsed: !headerPinned}}
                padding="md"
                navbar={{
                    width: 300,
                    breakpoint: "sm",
                    collapsed: {mobile: !mobileOpened, desktop: !desktopOpened},
                }}
            >
                <AppShell.Header>
                    <HeaderMenu
                        mobileOpend={mobileOpened}
                        toggleMobile={toggleMobile}
                        desktopOpened={desktopOpened}
                        toggleDesktop={toggleDesktop}
                    />
                </AppShell.Header>
                <AppShellNavbar>
                    <NavbarNested headerPinned={headerPinned} user={user as Account}/>
                </AppShellNavbar>
                <AppShell.Main>
                    <div className={classes.main}>
                        <Outlet/>
                    </div>
                </AppShell.Main>
                <AppShell.Footer>
                    <FooterSimple/>
                </AppShell.Footer>
            </AppShell>
        </>
    );
}
