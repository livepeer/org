import { Box, SxStyleProp, BoxProps } from "theme-ui"
import { useEffect, useState } from "react"

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
}) => {
  useEffect(() => {
    const img = new Image()
    img.src = "/backgrounds/illustrated.svg"
  }, [])

  return (
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
  )
}

export default IllustratedBackgroundBox
