import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"

const stats: StatProps[] = [
  {
    title: "4.20.17",
    label: "Date founded"
  },
  {
    title: "42,201",
    label: (
      <>
        Total GPUs <br /> on the network
      </>
    ),
    color: "gradient"
  },
  {
    title: "600k",
    label: (
      <>
        Current # of <br /> streams being transcoded
      </>
    )
  },
  {
    title: "0.01ms",
    label: (
      <>
        Avg. latency of <br />
        transcoded renditions
      </>
    ),
    color: "gradient"
  },
  {
    title: "11.5 ETH",
    label: (
      <>
        Total <br /> Fees Earned
      </>
    )
  },
  {
    title: "14.7 M",
    label: (
      <>
        Total <br /> LPT staked
      </>
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
        We’re proud of our history and growth and worked hard to get here.
        <br />
        Celebrate with us.
      </>
    }
    titleLabel="Project Statistics"
    pushSx={{ pb: ["80px", null, null, "160px"] }}
  >
    <StatsGrid stats={stats} />
  </SectionLayout>
)

export default ByTheNumbersSection
