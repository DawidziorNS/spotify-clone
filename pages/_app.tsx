import '../styles/globals.css'
import {SessionProvider} from "next-auth/react";
import {AppProps} from "next/app";
import {Session} from "next-auth";
import {RecoilRoot} from "recoil";

function MyApp({Component, pageProps,}: AppProps<{ session: Session }>) {
    return (
        <SessionProvider session={pageProps.session}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </SessionProvider>
    )
}

export default MyApp
