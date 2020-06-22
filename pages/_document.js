import Document, { Html, Head, Main, NextScript } from "next/document"
import { InitializeColorMode } from "theme-ui"

export default class extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* <InitializeColorMode /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
