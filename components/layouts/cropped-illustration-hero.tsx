import React, { forwardRef, useRef, useEffect } from "react"
import { Container, Heading, SxStyleProp } from "theme-ui"
import heroEffect from "lib/animations/hero-effect"
import cn from "classnames"

type Props = {
  title: React.ReactNode
  subtitle: React.ReactNode
  illustration: React.ReactNode
  background?: "muted" | "dark" | "black"
  pushSx?: SxStyleProp
  className?: string
  withAnimation?: boolean
}

const CroppedIllustrationHero = forwardRef(
  (
    {
      background,
      className,
      illustration,
      pushSx,
      subtitle,
      title,
      withAnimation
    }: Props,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (!sectionRef.current || !withAnimation) return
      heroEffect(sectionRef.current)
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
      <Container
        variant="section"
        className={cn(className, { hide__section: withAnimation })}
        ref={ref ? ref : sectionRef}
        sx={{ bg, maxWidth: "712px", mb: "-200px", ...pushSx }}
      >
        <Heading
          className={cn({ "h-animate": withAnimation })}
          variant="heading.1"
          sx={{ mb: 4, color: titleColor }}
        >
          {title}
        </Heading>
        <Heading
          className={cn({ "h-animate": withAnimation })}
          variant="heading.5"
          sx={{ mb: 5, color: subTitleColor }}
        >
          {subtitle}
        </Heading>
        <div className={cn({ "c-animate": withAnimation })}>{illustration}</div>
      </Container>
    )
  }
)

export default CroppedIllustrationHero
