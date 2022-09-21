import '../styles/globals.css'
import {SessionProvider} from "next-auth/react";
import {AppProps} from "next/app";
import {Session} from "next-auth";

function MyApp({Component, pageProps,}: AppProps<{ session: Session }>) {
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp
