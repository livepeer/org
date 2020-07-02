import SectionLayout from "components/layouts/section"
import { useKeenSlider } from "keen-slider/react"
import JumpInSlider from "./slider"

const JumpInSection = () => {
  return (
    <SectionLayout
      title="Jump in"
      subtitle="Get started by choosing the option that best describes your role in the network"
      background="dark"
      pushSx={{ py: "160px" }}
    >
      <JumpInSlider />
    </SectionLayout>
  )
}

export default JumpInSection
