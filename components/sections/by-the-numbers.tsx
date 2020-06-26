import { Grid } from "theme-ui"
import Stat, { StatProps } from "components/primitives/stat"
import SectionLayout from "components/layouts/section"

const stats: StatProps[] = [
  {
    title: "4.20.17",
    label: "Date founded"
  },
  {
    title: "42,201",
    label: "Total GPUs on the network",
    color: "gradient"
  },
  {
    title: "600k",
    label: "Current # of streams being transcoded"
  },
  {
    title: "0.01ms",
    label: "Avg. latency of transcoded renditions",
    color: "gradient"
  },
  {
    title: "15.5 ETH",
    label: "Infrastructure operator average earnings"
  },
  {
    title: "19.5 M",
    label: "Total LPT in circulation",
    color: "gradient"
  }
]

const ByTheNumbersSection = () => (
  <SectionLayout
    background="muted"
    title="Livepeer by the numbers"
    subtitle={
      <>
        We’re proud of the numbers and worked hard to get here.
        <br />
        Celebrate with us.
      </>
    }
    titleLabel="Subtitle"
  >
    <Grid
      columns={[6, null, null, "repeat(3, fit-content(260px))"]}
      gap={["100px", null, null, "80px", "120px"]}
      sx={{
        overflowX: "auto",
        mx: "auto",
        width: ["100vw", null, null, "100%"],
        left: [-3, null, null, 0],
        px: [4, null, null, 0],
        position: "relative",
        justifyContent: ["flex-start", null, null, "center"],
        my: [5, null, null, null, 6]
      }}
    >
      {stats.map((stat) => (
        <Stat key={`stat-${stat.title}-${stat.label}`} {...stat} />
      ))}
    </Grid>
  </SectionLayout>
)

export default ByTheNumbersSection
