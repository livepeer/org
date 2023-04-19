/** @jsx jsx */
import { jsx, Box, Card, Heading, Text, SxStyleProp } from "theme-ui";
import CardLink, { CardLinkProps } from "../links/card";
import React from "react";
import Link from "next/link";

export type BasicCardProps = {
  title?: React.ReactNode;
  description?: string;
  footnote?: string;
  linkProps: CardLinkProps;
  isLink?: boolean;
  className?: string;
  pushSx?: SxStyleProp;
  pushContentSx?: SxStyleProp;
};

const BasicCard = ({
  title,
  description,
  footnote,
  linkProps,
  className,
  pushSx,
  pushContentSx,
  isLink,
}: BasicCardProps) => {
  return (
    <Link href={linkProps.link.href} as={linkProps.link.asPath} passHref>
      <a
        target={linkProps.link.isExternal && "_blank"}
        className={className}
        sx={{
          overflow: "visible",
          transform: "translateY(0)",
          transition: ".1s",
          "&:hover": {
            transform: "translateY(-2px)",
            transition: ".1s",
          },
        }}>
        <Card
          className={isLink ? undefined : className}
          sx={{
            height: "100%",
            p: 0,
            boxShadow: "magical",
            transition: "box-shadow .2s",
            "&:hover": {
              boxShadow: isLink ? "long" : "magical",
              "> .cardHeaderGradient": {
                opacity: 0.5,
                transition: "opacity .3s",
              },
            },
            ...pushSx,
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              pt: "28px",
              pb: "24px",
              px: "24px",
              height: "100%",
              ...pushContentSx,
            }}>
            {title && (
              <Heading
                variant="heading.5"
                sx={{
                  color: "text",
                  textAlign: "left",
                  mb: 3,
                  fontWeight: 600,
                }}>
                {title}
              </Heading>
            )}
            {description && (
              <Text
                variant="clamp.3"
                sx={{
                  color: title ? "gray" : "text",
                  maxWidth: "100%",
                }}>
                {description}
              </Text>
            )}
            <Box
              sx={{
                marginTop: "auto",
              }}>
              {footnote && (
                <Text variant="small" sx={{ mb: 3, color: "gray" }}>
                  {footnote}
                </Text>
              )}

              <CardLink {...linkProps} as={isLink ? "div" : "a"} />
            </Box>
          </Box>
        </Card>
      </a>
    </Link>
  );
};

export default BasicCard;
