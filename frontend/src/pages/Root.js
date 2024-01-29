import { Outlet, useLoaderData, useSubmit } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";

function RootLayout() {
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }
        if (token === 'EXPIRED') {
          submit(null, { action: "/logout", method: "POST" });
      }
        setTimeout(() => {
            submit(null, { action: "/logout", method: "POST" });
        }, 1 * 60 * 60 * 1000);
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
