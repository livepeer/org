/** @jsx jsx */
import { jsx, SxStyleProp } from "theme-ui"

type Props = {
  value: number
  max: number
  transitionDuration: string
  pushSx?: SxStyleProp
  pushLineSx?: SxStyleProp
}

const Progress = ({
  value,
  max,
  transitionDuration,
  pushSx,
  pushLineSx
}: Props) => {
  const progress = value / max >= 1 ? "100%" : `${(value / max) * 100}%`
  return (
    <div
      sx={{
        position: "relative",
        bg: "gray",
        width: "100%",
        height: "1px",
        overflow: "hidden",
        ...pushSx
      }}
    >
      <span
        sx={{
          width: progress,
          transition: `width ${transitionDuration} linear`,
          position: "absolute",
          top: 0,
          left: 0,
          bg: "primary",
          height: "100%",
          ...pushLineSx
        }}
      />
    </div>
  )
}

export default Progress
