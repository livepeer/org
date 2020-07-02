import { ThemeProvider } from "theme-ui"
import theme from "lib/theme"
import "css/global.css"
import "keen-slider/keen-slider.min.css"

export default ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)
