import PageLayout from "components/layouts/page"
import CroppedIllustrationHero from "components/layouts/cropped-illustration-hero"
import IllustratedBackgroundBox from "components/layouts/illustrated-background-box"
import TokenholdersDashboardSvg from "components/svgs/tokenholders-dashboard"

const TokenholdersPage = () => (
  <PageLayout>
    <CroppedIllustrationHero
      title="Tokenholders"
      subtitle="Everyday thousands of tokenholders participate in Livepeer, the world’s first open source, peer-to-peer video transcoding platform."
      illustration={
        <IllustratedBackgroundBox pushContentSx={{ overflow: "hidden" }}>
          <TokenholdersDashboardSvg />
        </IllustratedBackgroundBox>
      }
      pushSx={{ mb: "-136px", maxWidth: "900px" }}
    />
  </PageLayout>
)

export default TokenholdersPage
