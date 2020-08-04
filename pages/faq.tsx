import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import { FiHelpCircle } from "react-icons/fi"
import FaqsSection from "components/sections/faqs"
import FaqHeroSvg from "components/svgs/faq-hero"
import { HeadProps } from "components/primitives/head"

const headProps: HeadProps = {
  meta: {
    title: "FAQ",
    description:
      "Livepeer.org is a primary online resource for participants and users of the Livepeer network.",
    url: "https://livepeer.org/participants",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg"
  }
}

const ParticipantsPage = () => (
  <PageLayout headProps={headProps} navProps={{ background: "dark" }}>
    <IconHero
      icon={<FiHelpCircle />}
      title="FAQ"
      subtitle="Below is a list of topics with the most frequently asked questions about the Livepeer network."
      illustration={<FaqHeroSvg />}
      background="dark"
      withAnimation
    />
    <FaqsSection />
  </PageLayout>
)

export default ParticipantsPage
