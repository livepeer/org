import React, { forwardRef, ReactNode } from "react"
import { Box, Container, Text, Heading, SxStyleProp } from "theme-ui"
// TODO replace this file

type Props = {
<<<<<<< HEAD
  background?: "muted" | "dark"
  className?: string
  pushSx?: SxStyleProp
  subtitle?: ReactNode
  title: ReactNode
  titleLabel?: ReactNode
}

type Ref = HTMLDivElement

const SectionLayout = forwardRef<Ref, Props>(
  (
    { background, children, className, pushSx, subtitle, title, titleLabel },
    ref
  ) => {
    let bg = "background"
    let titleColor = "text"
    let subTitleColor = "gray"
    switch (background) {
      case "muted":
        bg = "muted"
        break
      case "dark":
        bg = "text"
        titleColor = "background"
        subTitleColor = "lightGray"
        break
      default:
        break
    }
    return (
      <Box sx={{ bg, color: titleColor }} className={className} ref={ref}>
        <Container variant="section" sx={pushSx}>
          {titleLabel && (
            <Text
              className="h-animate"
              sx={{ color: titleColor }}
              variant="section.titleLabel"
            >
=======
  title: React.ReactNode
  subtitle?: React.ReactNode
  titleLabel?: React.ReactNode
  background?: "muted" | "dark" | "black"
  pushSx?: SxStyleProp
  headingContainerPushSx?: SxStyleProp
}

const SectionLayout: React.FC<Props> = ({
  children,
  title,
  subtitle,
  titleLabel,
  background,
  pushSx,
  headingContainerPushSx
}) => {
  let bg = "background"
  let titleColor = "text"
  let subTitleColor = "gray"
  switch (background) {
    case "muted":
      bg = "muted"
      break
    case "dark":
    case "black":
      titleColor = "background"
      subTitleColor = "lightGray"
      bg = background === "black" ? "black" : "text"
      break
    default:
      break
  }

  return (
    <Box sx={{ bg, color: titleColor }}>
      <Container variant="section" sx={pushSx}>
        <Box
          sx={{
            zIndex: "general",
            position: "relative",
            mb: ["56px", "72px"],
            ...headingContainerPushSx
          }}
        >
          {titleLabel && (
            <Text variant="section.titleLabel" sx={{ color: titleColor }}>
>>>>>>> master
              {titleLabel}
            </Text>
          )}
          {title && (
<<<<<<< HEAD
            <Heading
              className="h-animate"
              sx={{ color: titleColor }}
              variant="section.title"
            >
=======
            <Heading variant="section.title" sx={{ color: titleColor }}>
>>>>>>> master
              {title}
            </Heading>
          )}
          {subtitle && (
<<<<<<< HEAD
            <Heading
              className="h-animate"
              sx={{ color: subTitleColor }}
              variant="section.subtitle"
            >
              {subtitle}
            </Heading>
          )}
          <Divider isVertical isTransparent size={["56px", "72px"]} />
          {children}
        </Container>
      </Box>
    )
  }
)
=======
            <Heading variant="section.subtitle" sx={{ color: subTitleColor }}>
              {subtitle}
            </Heading>
          )}
        </Box>
        {children}
      </Container>
    </Box>
  )
}
>>>>>>> master

export default SectionLayout
