/** @jsx jsx */
import { jsx, Box, Card, Heading, Text, SxStyleProp } from "theme-ui"
import CardLink, { CardLinkProps } from "../links/card"
import React, { useMemo } from "react"
import Link from "next/link"

export type ImageCardProps = {
  title?: React.ReactNode,
  description?: string,
  footnote?: string,
  linkProps: CardLinkProps,
  image: {
    src: string,
    alt?: string
  },
  isLink?: boolean,
  className?: string,
  pushSx?: SxStyleProp,
  pushContentSx?: SxStyleProp,
}

const ImageCard = ({
  title,
  description,
  footnote,
  linkProps,
  image,
  className,
  pushSx,
  pushContentSx,
  isLink
}: ImageCardProps) => {
  const markup = useMemo(
    () => (
      <Card
        className={isLink ? undefined : className}
        sx={{
          height: "100%",
          p: 0,
          boxShadow: "magical",
          transition: "box-shadow .2s",
          "&:hover": {
            boxShadow: isLink ? "long" : "magical"
          },
          ...pushSx
        }}
      >
        <img
          {...image}
          sx={{ width: "100%", height: "182px", objectFit: "cover" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: "24px",
            height: "196px",
            ...pushContentSx
          }}
        >
          {title && (
            <Heading
              variant="heading.5"
              sx={{ color: "text", textAlign: "left", mb: 2 }}
            >
              {title}
            </Heading>
          )}
          {description && (
            <Text
              variant="clamp.3"
              sx={{
                color: title ? "gray" : "text",
                display: "-webkit-box",
                maxWidth: "100%",
                margin: "0 auto",
                overflow: "hidden"
              }}
            >
              {description}
            </Text>
          )}
          <Box
            sx={{
              marginTop: "auto"
            }}
          >
            {footnote && (
              <Text
                variant="small"
                sx={{ mb: 3, color: title ? "lightGray" : "gray" }}
              >
                {footnote}
              </Text>
            )}

            <CardLink {...linkProps} as={isLink ? "div" : "a"} />
          </Box>
        </Box>
      </Card>
    ),
    [
      title,
      description,
      footnote,
      linkProps,
      image,
      className,
      pushSx,
      pushContentSx,
      isLink
    ]
  )

  if (!isLink) return markup
  if (linkProps.link.isExternal) {
    return (
      <a
        href={linkProps.link.href}
        className={className}
        target="_blank"
        sx={{ overflow: "visible" }}
      >
        {markup}
      </a>
    )
  }
  return (
    <Link href={linkProps.link.href} as={linkProps.link.asPath} passHref>
      <a className={className} sx={{ overflow: "visible" }}>
        {markup}
      </a>
    </Link>
  )
}

export default ImageCard
