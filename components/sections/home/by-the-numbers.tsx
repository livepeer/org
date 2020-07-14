import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"
import { Text } from "theme-ui"

const stats: StatProps[] = [
  {
    title: "4.20.17",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Date founded
      </Text>
    )
  },
  {
    title: "42,201",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Total GPUs <br /> on the network
      </Text>
    ),
    color: "gradient"
  },
  {
    title: "600k",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Current # of <br /> streams being transcoded
      </Text>
    )
  },
  {
    title: "0.01ms",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Avg. latency of <br />
        transcoded renditions
      </Text>
    ),
    color: "gradient"
  },
  {
    title: "11.5 ETH",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Total <br /> Fees Earned
      </Text>
    )
  },
  {
    title: "14.7 M",
    label: (
      <Text variant="heading.5" sx={{ color: "text" }}>
        Total <br /> LPT staked
      </Text>
    ),
    color: "gradient"
  }
]

const ByTheNumbersSection = () => (
  <SectionLayout
    background="muted"
    title="Livepeer by the numbers"
    subtitle={
      <>
        We’re proud our history and growth and worked hard to get here.
        <br />
        Celebrate with us.
      </>
    }
    titleLabel="Network Statistics"
    pushSx={{ pb: ["80px", null, null, "160px"] }}
  >
    <StatsGrid stats={stats} />
  </SectionLayout>
)

export default ByTheNumbersSection
