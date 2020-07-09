import { Box, SxStyleProp } from "theme-ui"

type Props = {
  pushSx?: SxStyleProp
}

const Caret = ({ pushSx }: Props) => (
  <Box
    className="caret"
    sx={{
      display: "inline-block",
      userSelect: "none",
      height: 4,
      width: 2,
      bg: "primary",
      ...pushSx
    }}
  />
)

export default Caret
