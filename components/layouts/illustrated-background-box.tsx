import { Box, SxStyleProp, BoxProps } from "theme-ui"

type Props = {
  pushSx?: SxStyleProp
  pushContentSx?: SxStyleProp
  contentProps?: BoxProps
} & BoxProps

const IllustratedBackgroundBox: React.FC<Props> = ({
  children,
  pushSx,
  pushContentSx,
  contentProps,
  ...props
}) => (
  <Box
    {...props}
    sx={{
      p: 3,
      background: "url(/backgrounds/illustrated.svg)",
      backgroundSize: "cover",
      borderRadius: "lg",
      ...pushSx
    }}
  >
    <Box
      {...contentProps}
      sx={{
        bg: "background",
        borderRadius: "lg",
        height: "100%",
        ...pushContentSx
      }}
    >
      {children}
    </Box>
  </Box>
)

export default IllustratedBackgroundBox
