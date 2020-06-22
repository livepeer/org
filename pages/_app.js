import React from "react"
import NextApp from "next/app"
// import { DesignSystemProvider } from "@livepeer/ui"
import Header from "../components/Header"
// import theme from "../src/theme"
// import { ThemeProvider } from "theme-ui"

import "css/global.css"

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      // <ThemeProvider theme={theme}>
      // <Header />
      <Component {...pageProps} />
      // </ThemeProvider>
    )
  }
}
