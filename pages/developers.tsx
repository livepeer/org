import PublicNetworkBanner from "components/sections/developers/public-network-banner"
import HostedApiSection from "components/sections/developers/hosted-api"
import IsOpenSourceSection from "components/sections/developers/is-open-source"
import PageLayout from "components/layouts/page"
import IconHero from "components/layouts/icon-hero"
import { FiPlay } from "react-icons/fi"
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"

const CodePage = () => (
  <PageLayout pushContentSx={{ bg: "text" }}>
    <IconHero
      icon={<FiPlay />}
      title="Developers"
      subtitle="Livepeer supports live streaming, video on demand, and transcoding
            across video formats and protocols."
      illustration={
        <IllustratedBackgroundBox
          pushSx={{ height: "282px", mt: "70px", width: "100%" }}
          pushContentSx={{
            p: 3,
            height: "320px",
            boxShadow: "magical",
            mt: "-70px"
          }}
        >
          Code story
        </IllustratedBackgroundBox>
      }
    />
    <PublicNetworkBanner />
    <HostedApiSection />
    <IsOpenSourceSection />
  </PageLayout>
)

export default CodePage
