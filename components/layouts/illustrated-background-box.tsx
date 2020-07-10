import { Box, SxStyleProp, BoxProps } from "theme-ui"
import { forwardRef } from "react"

type Props = {
  pushSx?: SxStyleProp
  pushContentSx?: SxStyleProp
  contentProps?: BoxProps
} & BoxProps

const IllustratedBackgroundBox = forwardRef(
  (
    { children, pushSx, pushContentSx, contentProps, ...props }: Props,
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <>
      <Box
        {...props}
        ref={ref}
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
            overflow: "hidden",
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
)

export default IllustratedBackgroundBox
