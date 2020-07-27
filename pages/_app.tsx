import { ThemeProvider } from "theme-ui"
import theme from "lib/theme"
import "css/global.css"
import "keen-slider/keen-slider.min.css"
import initGsap from "lib/animations"
initGsap()

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App
