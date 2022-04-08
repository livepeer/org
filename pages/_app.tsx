import { ThemeProvider } from "theme-ui";
import theme from "lib/theme";
import "css/global.css";
import "keen-slider/keen-slider.min.css";
import initGsap from "lib/animations";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import Router from "next/router";
import { appWithTranslation } from "next-i18next";
import { IdProvider } from "@radix-ui/react-id";
import TinaProvider from "../.tina/components/TinaDynamicProvider";

initGsap();

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <TinaProvider>
      <IdProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </IdProvider>
    </TinaProvider>
  );
};

export default appWithTranslation(App);
