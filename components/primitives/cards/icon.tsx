/** @jsx jsx */
import { jsx, Card, Box, Heading, Text, Link as A } from "theme-ui"
import Link from "next/link"
import { FiArrowRight } from "react-icons/fi"

export type IconCardProps = {
  icon: React.ReactNode
  title: React.ReactNode
  description: string
  link: { label: string; href: string; asPath?: string }
  titleLabel?: string
}

const IconCard = ({
  icon,
  title,
  description,
  titleLabel = "For",
  link
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
    <Link href={link.href} as={link.asPath} passHref>
      <A
        sx={{
          variant: "text.small",
          fontWeight: 600,
          color: "secondary",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {link.label} <FiArrowRight size="22px" />
      </A>
    </Link>
  </Card>
)

export default IconCard
