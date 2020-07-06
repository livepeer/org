import JumpInSection from "components/sections/participants/jump-in"
import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import LivepeerSvg from "components/svgs/livepeer"

const AboutPage = () => (
  <PageLayout>
    <IconHero
      icon={<LivepeerSvg pushSx={{ width: "24px" }} isDark />}
      title="About Livepeer"
      subtitle="We believe in open components for an open video infrastructure and an open web."
      illustration={<LivepeerSvg />}
    />
    <JumpInSection />
  </PageLayout>
)

export default AboutPage
