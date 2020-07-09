import React, { forwardRef, ReactNode } from "react"
import { Box, Container, Text, Heading, SxStyleProp } from "theme-ui"

type Props = {
  title: ReactNode
  subtitle?: ReactNode
  titleLabel?: ReactNode
  background?: "muted" | "dark" | "black"
  pushSx?: SxStyleProp
  headingContainerPushSx?: SxStyleProp
  className?: string
  children: ReactNode
}

const SectionLayout = forwardRef(
  (
    {
      background,
      children,
      className,
      headingContainerPushSx,
      pushSx,
      subtitle,
      title,
      titleLabel
    }: Props,
    ref: React.RefObject<HTMLDivElement>
  ) => {
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
      <Box
        sx={{ bg, color: titleColor, position: "relative", zIndex: "general" }}
      >
        <Container
          variant="section"
          className={className}
          ref={ref}
          sx={pushSx}
        >
          <Box
            sx={{
              zIndex: "general",
              position: "relative",
              mb: ["56px", "72px"],
              ...headingContainerPushSx
            }}
          >
            {titleLabel && (
              <Text
                className="h-animate"
                variant="section.titleLabel"
                sx={{ color: titleColor }}
              >
                {titleLabel}
              </Text>
            )}
            {title && (
              <Heading
                className="h-animate"
                variant="section.title"
                sx={{ color: titleColor }}
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Heading
                className="h-animate"
                variant="section.subtitle"
                sx={{ color: subTitleColor }}
              >
                {subtitle}
              </Heading>
            )}
          </Box>
          {children}
        </Container>
      </Box>
    )
  }
)

export default SectionLayout
