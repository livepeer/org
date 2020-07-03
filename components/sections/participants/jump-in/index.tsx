/** @jsx jsx */
import { jsx } from "theme-ui"
import SectionLayout from "components/layouts/section"
import JumpInSlider from "./slider"
import MobileJumpInSlider from "./slider/mobile"

const JumpInSection = () => (
  <SectionLayout
    title="Jump in"
    subtitle="Get started by choosing the option that best describes your role in the network"
    background="dark"
    pushSx={{ py: "160px" }}
  >
    <div sx={{ display: ["none", null, null, "block"] }}>
      <JumpInSlider />
    </div>
    <div sx={{ display: ["block", null, null, "none"] }}>
      <MobileJumpInSlider />
    </div>
  </SectionLayout>
)

export default JumpInSection
