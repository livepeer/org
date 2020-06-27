import NextHead from "next/head"
import { useState, useEffect, useCallback } from "react"

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
  description: "Lorem ipsum dolor sit amet.",
  url: "https://livepeer.org",
  siteName: "Livepeer",
  image: "/OG.png"
}

type Props = {
  meta?: MetaType
}

const Head = ({ meta = {} }: Props) => {
  meta = { ...defaultMeta, ...meta }
  if (meta.title !== defaultMeta.title) {
    meta.title = `${meta.title} - Livepeer`
  }

  const [prefersDark, setPrefersDark] = useState(false)

  const handlePreferenceChange = useCallback((e) => {
    setPrefersDark(e.matches)
  }, [])

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    setPrefersDark(darkMediaQuery.matches)
    if (darkMediaQuery.addEventListener) {
      darkMediaQuery.addEventListener("change", handlePreferenceChange)
    } else if (darkMediaQuery.addListener) {
      darkMediaQuery.addListener(handlePreferenceChange)
    }

    return () => {
      if (darkMediaQuery.removeEventListener) {
        darkMediaQuery.removeEventListener("change", handlePreferenceChange)
      } else if (darkMediaQuery.removeListener) {
        darkMediaQuery.removeListener(handlePreferenceChange)
      }
    }
  }, [])

  return (
    <NextHead>
      <link
        rel="icon"
        type="image/png"
        href={prefersDark ? "/favicon-white.png" : "/favicon.png"}
      />
      <title key="title">{meta.title}</title>
      <meta name="description" content={meta.description} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:image" content={meta.image} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:site" content={meta.twitterUsername} />
      <meta name="twitter:image" content={meta.image} />
    </NextHead>
  )
}

export default Head
