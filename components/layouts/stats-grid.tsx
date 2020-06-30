import { Grid } from "theme-ui"
import Stat, { StatProps } from "components/primitives/stat"
import Slider from "components/primitives/slider"

type Props = {
  stats: StatProps[]
}

const StatsGrid = ({ stats }: Props) => (
  <>
    <Grid
      columns={"repeat(3, fit-content(260px))"}
      gap={["100px", null, null, "80px", "120px"]}
      sx={{
        mx: "auto",
        width: "100%",
        left: [-3, null, null, 0],
        px: [4, null, null, 0],
        position: "relative",
        justifyContent: "center",
        display: ["none", null, null, "grid"]
      }}
    >
      {stats.map((stat) => (
        <Stat key={`stat-${stat.title}-${stat.label}`} {...stat} />
      ))}
    </Grid>
    <Slider pushSx={{ display: ["block", null, null, "none"] }}>
      {stats.map((stat) => (
        <Stat
          key={`stat-slider-${stat.title}-${stat.label}`}
          pushSx={{ mx: 4, whiteSpace: "pre-wrap" }}
          {...stat}
        />
      ))}
    </Slider>
  </>
)

export default StatsGrid
