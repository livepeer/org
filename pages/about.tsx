import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import LivepeerIconSvg from "components/svgs/icons/livepeer"
import MissionSection from "components/sections/about/mission"
import WhoIsBuildingSection from "components/sections/about/who-is-building"
import WhoIsMaintainingSection from "components/sections/about/who-is-maintaining"
import { HeadProps } from "components/primitives/head"

const headProps: HeadProps = {
  meta: {
    title: "About",
    description:
      "Livepeer.org is a primary online resource for participants and users of the Livepeer network.",
    url: "https://livepeer.org/about",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg"
  }
}

const AboutPage = () => (
  <PageLayout headProps={headProps}>
    <IconHero
      icon={<LivepeerIconSvg pushSx={{ width: "24px" }} isDark />}
      title="About Livepeer.org"
      subtitle="Livepeer.org is a primary online resource for participants and users of the Livepeer network."
      illustration={<LivepeerIconSvg />}
      withAnimation
    />
    <MissionSection />
    <WhoIsBuildingSection />
    <WhoIsMaintainingSection />
  </PageLayout>
)

export default AboutPage
