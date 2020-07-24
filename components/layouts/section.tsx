/** @jsx jsx */
import { jsx, Box, Container, Text, Heading, SxStyleProp } from "theme-ui"
import React, { forwardRef, ReactNode, useRef, useEffect } from "react"
import gsap from "gsap"
import { DURATION } from "lib/animations"
import cn from "classnames"

type Props = {
  background?: "muted" | "dark" | "black"
  children: ReactNode
  className?: string
  headingContainerPushSx?: SxStyleProp
  id?: string
  pushSx?: SxStyleProp
  subtitle?: React.ReactNode
  title?: React.ReactNode
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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current
        }
      })
      tl.set(sectionRef.current, {
        autoAlpha: 0
      })
      // @ts-ignore
      tl.sectionEntrance(sectionRef.current, { delay: DURATION * 2 })
    }, [sectionRef])

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
              <Text variant="section.titleLabel" sx={{ color: titleColor }}>
                {titleLabel}
              </Text>
            )}
            {title && (
              <Heading
                variant="section.title"
                sx={{ color: titleColor, position: "relative" }}
              >
                <span sx={{ position: "absolute", top: "-164px" }} id={id} />
                {title}
              </Heading>
            )}
            {subtitle && (
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
)

export default SectionLayout
