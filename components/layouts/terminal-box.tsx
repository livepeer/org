import { BoxProps, Box, Flex } from "theme-ui"
import { forwardRef } from "react"
import WindowDots from "components/primitives/window-dots"

type Props = BoxProps

const TerminalBox = forwardRef(
  ({ children, ...props }: Props, ref: React.RefObject<HTMLDivElement>) => (
    <Box {...props} ref={ref} sx={{ ...props.sx }}>
      <Flex
        sx={{
          position: "relative",
          textAlign: "center",
          height: 12,
          borderBottom: "1px solid",
          borderColor: "ultraLightGray",
          alignItems: "center",
          justifyContent: "center",
          color: "gray",
          fontSize: 1,
          pl: "0"
        }}
      >
        <WindowDots />
        bash
      </Flex>
      <Box sx={{ p: 3 }}>{children}</Box>
    </Box>
  )
)

export default TerminalBox
