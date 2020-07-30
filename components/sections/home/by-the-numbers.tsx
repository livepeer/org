import { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"
import StatsGrid from "components/layouts/stats-grid"
import { nFormatter } from "lib/document-helpers"

type Props = {
  totalActiveStake: number
}

const ByTheNumbersSection = ({ totalActiveStake }: Props) => {
  const stats: StatProps[] = [
    {
      title: "4.20.17",
      label: "Date founded"
    },
    {
      title: "50k+",
      label: (
        <>
          Total GPUs <br /> on the network
        </>
      ),
      color: "gradient"
    },
    {
      title: `${nFormatter(totalActiveStake, 1)}`,
      label: (
        <>
          Total <br /> LPT staked
        </>
      )
    }
  ]
  return (
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
}

export default ByTheNumbersSection
