import { BoxProps, Box, Flex, Text } from "theme-ui"
import { forwardRef } from "react"
import WindowDots from "components/primitives/window-dots"

const LineNumbers = ({ length = 64 }) => (
  <Box sx={{ position: "absolute", left: 4 }}>
    {Array.from({ length }, (_, i) => i).map((n) => (
      <Text
        key={`code-editor-line-number-${n}`}
        sx={{
          color: "lightGray",
          fontSize: 1,
          fontFamily: "mono",
          lineHeight: "24px"
        }}
      >
        {n}
      </Text>
    ))}
  </Box>
)

type TabProps = { label: string; isSelected?: boolean }

const Tab = ({ label, isSelected }: TabProps) => (
  <Box
    sx={{
      height: "100%",
      variant: "layout.flexCenter",
      bg: isSelected ? "muted" : "transparent",
      px: 3
    }}
  >
    {label}
  </Box>
)

type Props = BoxProps & {
  tabs: TabProps[]
}

const CodeEditorBox = forwardRef(
  (
    { children, tabs, ...props }: Props,
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <Box {...props} ref={ref} sx={{ ...props.sx }}>
      <Flex
        sx={{
          position: "relative",
          textAlign: "center",
          height: 12,
          alignItems: "center",
          justifyContent: "flex-start",
          color: "gray",
          fontSize: 1,
          bg: "#F0F0F0",
          pl: "88px"
        }}
      >
        <WindowDots />
        {tabs.map((t) => (
          <Tab key={`window-box-tab-${t.label}`} {...t} />
        ))}
      </Flex>
      <Box sx={{ p: 3, pl: 5, position: "relative" }}>
        <LineNumbers />
        {children}
      </Box>
    </Box>
  )
)

export default CodeEditorBox
