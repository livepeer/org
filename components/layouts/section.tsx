import React, { forwardRef, ReactNode, useRef, useEffect } from "react"
import { Box, Container, Text, Heading, SxStyleProp } from "theme-ui"
import sectionEffect from "lib/animations/section-effect"
import cn from "classnames"

type Props = {
  title: ReactNode
  subtitle?: ReactNode
  titleLabel?: ReactNode
  background?: "muted" | "dark" | "black"
  pushSx?: SxStyleProp
  headingContainerPushSx?: SxStyleProp
  className?: string
  children: ReactNode
  withAnimation?: boolean
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
      titleLabel,
      withAnimation
    }: Props,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!sectionRef.current || !withAnimation) return
      sectionEffect(sectionRef.current)
    }, [sectionRef, withAnimation])

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
    }

    return (
      <Box
        sx={{ bg, color: titleColor, position: "relative", zIndex: "general" }}
      >
        <Container
          variant="section"
          className={cn(className, { hide__section: withAnimation })}
          ref={ref ? ref : sectionRef}
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
                className={cn({ "h-animate": withAnimation }, "title-label")}
                variant="section.titleLabel"
                sx={{ color: titleColor }}
              >
                {titleLabel}
              </Text>
            )}
            {title && (
              <Heading
                className={cn({ "h-animate": withAnimation }, "title")}
                variant="section.title"
                sx={{ color: titleColor }}
              >
                {title}
              </Heading>
            )}
            {subtitle && (
              <Heading
                className={cn({ "h-animate": withAnimation }, "subtitle")}
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
