import IsOpenSourceSection from "components/sections/developers/is-open-source"
import PageLayout from "components/layouts/page"
import DevelopersHero from "components/sections/developers/hero"
import HugeCardsSection from "components/sections/developers/huge-cards"
import { HeadProps } from "components/primitives/head"

const headProps: HeadProps = {
  meta: {
    title: "Livepeer - Developers",
    description:
      "Livepeer.org is a primary online resource for participants and users of the Livepeer network.",
    url: "https://livepeer.org/developers",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg"
  }
}

const CodePage = () => (
  <PageLayout headProps={headProps} pushContentSx={{ bg: "text" }}>
    <DevelopersHero />
    <HugeCardsSection />
    <IsOpenSourceSection />
  </PageLayout>
)

export default CodePage
