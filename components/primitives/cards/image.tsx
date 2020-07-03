import { Box, Card, Heading, Text } from "theme-ui"
import CardLink, { CardLinkProps } from "../links"

export type ImageCardProps = {
  title: React.ReactNode
  description: string
  linkProps: CardLinkProps
  image: {
    src: string
    alt?: string
  }
}

const ImageCard = ({
  title,
  description,
  linkProps,
  image
}: ImageCardProps) => (
  <Card>
    <img {...image} />
    <Box>
      <Heading variant="heading.5" sx={{ textAlign: "left" }}>
        {title}
      </Heading>
      <Text variant="normal">{description}</Text>
    </Box>
    <CardLink {...linkProps} />
  </Card>
)

export default ImageCard
