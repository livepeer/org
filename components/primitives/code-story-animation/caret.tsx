import { Box, SxStyleProp } from "theme-ui"
import { forwardRef } from "react"

type Props = {
  pushSx?: SxStyleProp
}

const Caret = forwardRef(
  ({ pushSx }: Props, ref: React.RefObject<HTMLDivElement>) => (
    <Box
      className="caret"
      ref={ref}
      sx={{
        display: "inline-block",
        userSelect: "none",
        height: 4,
        mb: "-2px",
        width: 2,
        bg: "primary",
        ...pushSx
      }}
    />
  )
)

export default Caret
