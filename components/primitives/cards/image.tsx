/** @jsx jsx */
import { jsx, Box, Card, Heading, Text } from "theme-ui"
import CardLink, { CardLinkProps } from "../links"

export type ImageCardProps = {
  title: React.ReactNode
  description?: string
  footnote?: string
  linkProps: CardLinkProps
  image: {
    src: string
    alt?: string
  }
  className?: string
}

const ImageCard = ({
  title,
  description,
  footnote,
  linkProps,
  image,
  className
}: ImageCardProps) => (
  <Card className={className} sx={{ p: 0 }}>
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
        justifyContent: "space-between"
      }}
    >
      <Box>
        <Heading variant="normal">{title}</Heading>
        {description && <Text variant="normal">{description}</Text>}
        {footnote && (
          <Text variant="small" sx={{ mt: 3 }}>
            {footnote}
          </Text>
        )}
      </Box>
      <CardLink {...linkProps} />
    </Box>
  </Card>
)

export default ImageCard
