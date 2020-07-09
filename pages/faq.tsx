import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import { FiHelpCircle } from "react-icons/fi"
import FaqsSection from "components/sections/faqs"
import FaqHeroSvg from "components/svgs/faq-hero"

const ParticipantsPage = () => (
  <PageLayout navProps={{ background: "dark" }}>
    <IconHero
      icon={<FiHelpCircle />}
      title="FAQ"
      subtitle="Below is a list of topics with the most frequently asked questions about the Livepeer network."
      illustration={<FaqHeroSvg />}
      background="dark"
    />
    <FaqsSection />
  </PageLayout>
)

export default ParticipantsPage
