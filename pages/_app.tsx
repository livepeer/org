import { ThemeProvider } from "theme-ui";
import theme from "lib/theme";
import "css/global.css";
import "keen-slider/keen-slider.min.css";
import initGsap from "lib/animations";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import Router from "next/router";
import { appWithTranslation } from "next-i18next";
import TinaProvider from "../.tina/components/TinaDynamicProvider";
import {
  SnackbarProvider,
  DesignSystemProvider,
} from "@livepeer/design-system";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

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
    <DesignSystemProvider>
      <Theme appearance="light">
        <SnackbarProvider>
          <TinaProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </TinaProvider>
        </SnackbarProvider>
      </Theme>
    </DesignSystemProvider>
  );
};

export default appWithTranslation(App);
