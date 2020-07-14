import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"
import { Text } from "theme-ui"

const stats: StatProps[] = [
  {
    title: "45",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Total active <br /> infrastructure operators
      </Text>
    )
  },
  {
    title: "11.4",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Total <br /> fees earned
      </Text>
    ),
    color: "gradient"
  },

  {
    title: "Free",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Cost to activate <br />
        your node
      </Text>
    )
  }
]

const LetTheNumbersTalkSection = () => (
  <SectionLayout
    title="The Numbers"
    subtitle="The capacity on Livepeer's network represents access to 70,000+ GPUs, or enough to encode all the realtime video streaming through Twitch, Facebook, and Youtube combined."
    pushSx={{ py: ["80px", null, null, "160px"] }}
  >
    <StatsGrid stats={stats} />
  </SectionLayout>
)

export default LetTheNumbersTalkSection
