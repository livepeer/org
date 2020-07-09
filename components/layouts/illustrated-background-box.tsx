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
  <>
    <Box
      {...props}
      sx={{
        p: 3,
        backgroundImage: "url(/backgrounds/illustrated.svg)",
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
    {/* A hidden placeholder to preload the svg */}
    <Box
      sx={{
        backgroundImage: "url(/backgrounds/illustrated.svg)",
        display: "none"
      }}
    />
  </>
)

export default IllustratedBackgroundBox
