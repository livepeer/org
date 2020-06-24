import { DesignSystemProvider } from "@livepeer/ui"

import "css/global.css"

export default ({ Component, pageProps }) => (
  <DesignSystemProvider>
    <Component {...pageProps} />
  </DesignSystemProvider>
)
