import React, { forwardRef, useRef, useEffect } from "react";
import { Container, Heading, SxStyleProp, Box, Link as A } from "theme-ui";
import heroEffect from "lib/animations/hero-effect";
import cn from "classnames";
import Link from "next/link";
import { LinkProps } from "lib/types/link-props";

type LinkCta = LinkProps;

type Props = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  illustration: React.ReactNode;
  background?: "muted" | "dark" | "black";
  pushSx?: SxStyleProp;
  className?: string;
  withAnimation?: boolean;
  cta?: LinkCta;
};

const CroppedIllustrationHero = forwardRef(
  (
    {
      background,
      className,
      illustration,
      pushSx,
      subtitle,
      title,
      withAnimation,
      cta,
    }: Props,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (!sectionRef.current || !withAnimation) return;
      heroEffect(sectionRef.current);
    }, [sectionRef, withAnimation]);

    let bg = "background";
    let titleColor = "text";
    let subTitleColor = "gray";
    switch (background) {
      case "muted":
        bg = "muted";
        break;
      case "dark":
      case "black":
        titleColor = "background";
        subTitleColor = "lightGray";
        bg = background === "black" ? "black" : "text";
        break;
      default:
        break;
    }

    return (
      <Container
        variant="section"
        className={cn(className, { hide__section: withAnimation })}
        ref={ref ? ref : sectionRef}
        sx={{ bg, maxWidth: "712px", mb: "-200px", ...pushSx }}>
        <Heading
          className={cn({ "h-animate": withAnimation })}
          variant="heading.1"
          sx={{ fontSize: ["54px", "88px"], mb: 4, color: titleColor }}>
          {title}
        </Heading>
        <Heading
          className={cn({ "h-animate": withAnimation })}
          variant="heading.5"
          sx={{ color: subTitleColor }}>
          {subtitle}
        </Heading>
        {cta && (
          <Box sx={{ textAlign: "center" }}>
            <Link href={cta.href} passHref>
              <A
                variant="buttons.primary"
                sx={{
                  mt: 4,
                  zIndex: "general",
                  position: "relative",
                }}>
                {cta.label}
              </A>
            </Link>
          </Box>
        )}
        <Box sx={{ mt: 5 }} className={cn({ "c-animate": withAnimation })}>
          {illustration}
        </Box>
      </Container>
    );
  }
);

export default CroppedIllustrationHero;
