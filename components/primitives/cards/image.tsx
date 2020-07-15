/** @jsx jsx */
import { jsx, Box, Card, Heading, Text, SxStyleProp, Flex } from "theme-ui"
import CardLink, { CardLinkProps } from "../links/card"
import { useMemo } from "react"
import Link from "next/link"

export type ImageCardProps = {
  title?: React.ReactNode
  description?: string
  footnote?: string
  linkProps: CardLinkProps
  image: {
    src: string
    alt?: string
  }
  isLink?: boolean
  className?: string
  pushSx?: SxStyleProp
  pushContentSx?: SxStyleProp
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
            <Text variant="normal" sx={{ color: title ? "gray" : "text" }}>
              {description}
            </Text>
          )}

          {footnote && (
            <Text
              variant="small"
              sx={{ mb: 3, color: title ? "lightGray" : "gray" }}
            >
              {footnote}
            </Text>
          )}
          <Box
            sx={{
              marginTop: "auto"
            }}
          >
            <CardLink {...linkProps} />
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
      <a href={linkProps.link.href} className={className} target="_blank">
        {markup}
      </a>
    )
  }
  return (
    <Link href={linkProps.link.href} as={linkProps.link.asPath}>
      <a className={className}>{markup}</a>
    </Link>
  )
}

export default ImageCard
