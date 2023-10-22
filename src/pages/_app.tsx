import type { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";

import { RecoilRoot } from "recoil";
import {AppPropsWithRecoil} from "@/types";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & AppPropsWithRecoil & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <div>{page}</div>);
  return (
    <RecoilRoot initializeState={(mutableSnapshot) => Component?.getInitialRecoilState?.(pageProps, mutableSnapshot)}>
        {getLayout(<Component {...pageProps} />)}
        <div id="portal" />
    </RecoilRoot>
  );
}

export default App;
