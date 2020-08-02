import NextHead from "next/head"

export type MetaType = {
  title?: string
  description?: string
  url?: string
  siteName?: string
  image?: string
  twitterUsername?: string
}

const defaultMeta: MetaType = {
  title: "Livepeer",
  description:
    "Decentralized live video streaming, built on the Ethereum blockchain. Livepeer is live on Ethereum mainnet.",
  url: "https://livepeer.org",
  siteName: "Livepeer",
  image: "https://livepeer.org/OG.png",
  twitterUsername: "@LivepeerOrg"
}

export type HeadProps = {
  meta?: MetaType
}

const Head = ({ meta = {} }: HeadProps) => {
  meta = { ...defaultMeta, ...meta }
  if (meta.title !== defaultMeta.title) {
    meta.title = `${meta.title} - Livepeer`
  }

  return (
    <NextHead>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <title key="title">{meta.title}</title>
      <meta name="description" content={meta.description} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:image" content={`${meta.image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:site" content={meta.twitterUsername} />
      <meta name="twitter:image" content={`${meta.image}`} />
    </NextHead>
  )
}

export default Head
