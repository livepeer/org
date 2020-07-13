import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import LivepeerIconSvg from "components/svgs/icons/livepeer"
import MissionSection from "components/sections/about/mission"
import WhoIsBuildingSection from "components/sections/about/who-is-building"
import WhoIsMaintainingSection from "components/sections/about/who-is-maintaining"

const AboutPage = () => (
  <PageLayout>
    <IconHero
      icon={<LivepeerIconSvg pushSx={{ width: "24px" }} isDark />}
      title="About Livepeer.org"
      subtitle="Livepeer.org is a primary online resource for participants and users of the Livepeer network."
      illustration={<LivepeerIconSvg />}
    />
    <MissionSection />
    <WhoIsBuildingSection />
    <WhoIsMaintainingSection />
  </PageLayout>
)

export default AboutPage
