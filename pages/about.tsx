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
      title="About Livepeer"
      subtitle="We believe in open components for an open video infrastructure and an open web."
      illustration={<LivepeerIconSvg />}
      withAnimation
    />
    <MissionSection />
    <WhoIsBuildingSection />
    <WhoIsMaintainingSection />
  </PageLayout>
)

export default AboutPage
