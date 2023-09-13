import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";

import "@styles/index.scss";
import { wrapper } from "@store";

Router.events.on("routeChangeError", () => NProgress.done());
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);
