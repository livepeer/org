/** @jsx jsx */
import { jsx, Card, Box, Heading, Text } from "theme-ui"
import CardLink, { CardLinkProps } from "../links"

export type IconCardProps = {
  icon: React.ReactNode
  title: React.ReactNode
  description: string
  linkProps: CardLinkProps
  titleLabel?: string
}

const IconCard = ({
  icon,
  title,
  description,
  titleLabel = "For",
  linkProps
}: IconCardProps) => (
  <Card
    sx={{
      height: "526px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}
  >
    <div>
      <Box sx={{ mb: 5 }}>
        <i
          sx={{
            width: 16,
            height: 16,
            bg: "primary",
            color: "text",
            fontSize: 6,
            variant: "layout.flexCenter",
            borderRadius: "full"
          }}
        >
          {icon}
        </i>
      </Box>
      <Text variant="heading.5" sx={{ textAlign: "left", mb: 1 }}>
        {titleLabel}
      </Text>
      <Heading variant="heading.4" sx={{ textAlign: "left", mb: "24px" }}>
        {title}
      </Heading>
      <Text variant="normal">{description}</Text>
    </div>
    <CardLink {...linkProps} />
  </Card>
)

export default IconCard
