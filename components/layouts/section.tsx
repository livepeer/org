/** @jsx jsx */
import { jsx, Box, Container, Text, Heading, SxStyleProp } from "theme-ui"
import React, { forwardRef, ReactNode, useRef, useEffect } from "react"
import cn from "classnames"
import elementEffect from "lib/animations/section-effect"

type Props = {
  background?: "muted" | "dark" | "black"
  children: ReactNode
  className?: string
  headingContainerPushSx?: SxStyleProp
  id?: string
  pushSx?: SxStyleProp
  subtitle?: React.ReactNode
  title: React.ReactNode
  titleLabel?: React.ReactNode
  withAnimation?: boolean
}

const SectionLayout = forwardRef(
  (
    {
      background,
      children,
      className,
      headingContainerPushSx,
      id,
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
      elementEffect(sectionRef.current)
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
      default:
        break
    }

    return (
      <Box
        sx={{ bg, color: titleColor, position: "relative", zIndex: "general" }}
      >
        <Container
          variant="section"
          sx={pushSx}
          className={cn(className, { hide__section: withAnimation })}
          ref={ref ? ref : sectionRef}
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
                className={cn({ "h-animate": withAnimation })}
                variant="section.titleLabel"
                sx={{ color: titleColor }}
              >
                {titleLabel}
              </Text>
            )}
            {title && (
              <Heading
                className={cn({ "h-animate": withAnimation })}
                variant="section.title"
                sx={{ color: titleColor, position: "relative" }}
              >
                <span sx={{ position: "absolute", top: "-164px" }} id={id} />
                {title}
              </Heading>
            )}
            {subtitle && (
              <Heading
                className={cn({ "h-animate": withAnimation })}
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
