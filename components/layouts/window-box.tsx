import { BoxProps, Box } from "theme-ui"
import { forwardRef } from "react"

const Dot = ({ bg }: { bg: "#FF4A4A" | "#FFB83D" | "#00C543" }) => (
  <Box
    className="dot"
    sx={{
      bg,
      width: 3,
      height: 3,
      borderRadius: "full",
      display: "inline-block"
    }}
  />
)

const Dots = () => (
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: 3,
      transform: "translateY(-50%)",
      ".dot:not(:last-of-type)": { mr: 2 }
    }}
  >
    <Dot bg="#FF4A4A" />
    <Dot bg="#FFB83D" />
    <Dot bg="#00C543" />
  </Box>
)

type Props = BoxProps

const WindowBox = forwardRef(
  ({ children, ...props }: Props, ref: React.RefObject<HTMLDivElement>) => {
    return (
      <Box {...props} ref={ref} sx={{ ...props.sx }}>
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            height: 12,
            borderBottom: "1px solid",
            borderColor: "ultraLightGray",
            variant: "layout.flexCenter",
            color: "gray",
            fontSize: 1
          }}
        >
          <Dots />
          bash
        </Box>
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    )
  }
)

export default WindowBox
