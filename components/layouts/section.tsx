import React, { forwardRef, ReactNode } from "react"
import { Box, Container, Text, Heading, SxStyleProp } from "theme-ui"
import { Divider } from "components/primitives/divider"

type Props = {
  background?: "muted" | "dark"
  className?: string
  pushSx?: SxStyleProp
  subtitle?: ReactNode
  title: ReactNode
  titleLabel?: ReactNode
}

export type Ref = HTMLDivElement

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
              {titleLabel}
            </Text>
          )}
          {title && (
            <Heading
              className="h-animate"
              sx={{ color: titleColor }}
              variant="section.title"
            >
              {title}
            </Heading>
          )}
          {subtitle && (
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

export default SectionLayout
