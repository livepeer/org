import { Box, Text, Flex, Link as A } from "theme-ui"
import Link from "next/link"

export type FooterListProps = {
  title: string
  items: { label: string; href: string; asPath?: string }[]
}

const FooterList = ({ title, items }: FooterListProps) => (
  <Box>
    <Text
      sx={{
        fontWeight: 600,
        mb: "24px",
        textAlign: ["center", null, null, "left"]
      }}
    >
      {title}
    </Text>
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: ["center", null, null, "flex-start"],
        "a:not(:last-of-type)": {
          mb: 2
        }
      }}
    >
      {items.map((item) => (
        <Link
          key={`footer-list-link-${title}-${item.label}`}
          href={item.href}
          as={item.asPath}
          passHref
        >
          <A
            sx={{
              width: "fit-content",
              textAlign: ["center", null, null, "left"]
            }}
            data-dark
          >
            {item.label}
          </A>
        </Link>
      ))}
    </Flex>
  </Box>
)

export default FooterList
