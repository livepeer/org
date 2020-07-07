/** @jsx jsx */
import { jsx, Box, Card, Heading, Text, SxStyleProp } from "theme-ui"
import CardLink, { CardLinkProps } from "../links"
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
        className={className}
        sx={{
          p: 0,
          pushSx,
          boxShadow: "magical",
          transition: "box-shadow .2s",
          "&:hover": {
            boxShadow: isLink ? "long" : "magical"
          }
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            ...pushContentSx
          }}
        >
          <Box>
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
                sx={{ mt: 3, color: title ? "lightGray" : "gray" }}
              >
                {footnote}
              </Text>
            )}
          </Box>
          <CardLink {...linkProps} />
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
      <a href={linkProps.link.href} target="_blank">
        {markup}
      </a>
    )
  }
  return (
    <Link href={linkProps.link.href} as={linkProps.link.asPath}>
      <a>{markup}</a>
    </Link>
  )
}

export default ImageCard
