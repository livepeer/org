import { ThemeProvider } from "theme-ui"
import theme from "lib/theme"
import "css/global.css"

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)
