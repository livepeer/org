import { Card, Link as A, Heading, Text } from "theme-ui"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"

export type LinkCardProps = {
  title: React.ReactNode
  description: string
  link: { label: string; href: string; asPath?: string }
}

const LinkCard = ({ title, description, link }: LinkCardProps) => (
  <Card>
    <Heading variant="heading.5">{title}</Heading>
    <Text>{description}</Text>
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
        {link.label} <FiArrowUpRight size="22px" />
      </A>
    </Link>
  </Card>
)

export default LinkCard
