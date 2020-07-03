import CodeHero from "components/sections/code/hero"
import OpenSourceSection from "components/sections/code/open-source"
import GetInvolvedSection from "components/sections/code/get-involved"
import PageLayout from "components/layouts/page"

const CodePage = () => (
  <PageLayout pushContentSx={{ bg: "text" }} isDark>
    <CodeHero />
    <OpenSourceSection />
    <GetInvolvedSection />
  </PageLayout>
)

export default CodePage
