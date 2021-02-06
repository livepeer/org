/** @jsx jsx */
import React, { forwardRef, useRef, useEffect } from "react";
import { jsx, Box, Container, Heading, Grid, SxStyleProp } from "theme-ui";
import Divider from "components/primitives/divider";
import heroEffect from "lib/animations/hero-effect";
import cn from "classnames";

type Props = {
  icon: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  illustration: React.ReactNode;
  background?: "muted" | "dark" | "black";
  pushSx?: SxStyleProp;
  className?: string;
  withAnimation?: boolean;
};

const IconHero = forwardRef(
  (
    {
      icon,
      title,
      className,
      subtitle,
      illustration,
      background,
      pushSx,
      withAnimation,
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
      <Box sx={{ bg, ...pushSx }}>
        <Container
          variant="section"
          className={cn(className, { hide__section: withAnimation })}
          ref={ref ? ref : sectionRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 0,
          }}>
          <Grid variant="layout.section" gap={5} columns={[1, null, null, 2]}>
            <Box>
              <i
                className={cn({ "h-animate": withAnimation })}
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: "full",
                  bg: "primary",
                  color: "text",
                  fontSize: 6,
                  mb: 4,
                  variant: "layout.flexCenter",
                  zIndex: "general",
                  position: "relative",
                }}>
                {icon}
              </i>
              <Heading
                className={cn({ "h-animate": withAnimation })}
                sx={{
                  variant: ["text.heading.2", "text.heading.1"],
                  textAlign: ["left", "left"],
                  color: titleColor,
                  zIndex: "general",
                  position: "relative",
                }}>
                {title}
              </Heading>
              <Divider
                isTransparent
                isVertical
                size={["12px", "16px", "24px"]}
              />
              <Heading
                className={cn({ "h-animate": withAnimation })}
                variant="section.subtitle"
                sx={{
                  textAlign: "left",
                  color: subTitleColor,
                  zIndex: "general",
                  position: "relative",
                }}>
                {subtitle}
              </Heading>
            </Box>
            <Box
              className={cn({ "c-animate": withAnimation })}
              variant="layout.flexCenter">
              {illustration}
            </Box>
          </Grid>
        </Container>
      </Box>
    );
  }
);

export default IconHero;
