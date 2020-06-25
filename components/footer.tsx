import { Box, Container, Heading, Link as A, Grid, Flex, Text } from "theme-ui"
import Link from "next/link"
import { Divider } from "./primitives/divider"
import LivepeerLogo from "./icons/livepeer-logo"

type ListProps = {
  title: string
  items: { label: string; href: string; asPath?: string }[]
}

const List = ({ title, items }: ListProps) => (
  <Box>
    <Text sx={{ fontWeight: 600, mb: "24px" }}>{title}</Text>
    <Flex
      sx={{
        flexDirection: "column",
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
          <A sx={{ color: "background", width: "fit-content" }}>{item.label}</A>
        </Link>
      ))}
    </Flex>
  </Box>
)

const lists: ListProps[] = [
  {
    title: "Participants",
    items: [
      { label: "Tokenholders", href: "/" },
      { label: "Infrastructure Operators", href: "/" },
      { label: "Protocol Explorer", href: "/" },
      { label: "The Grant Program", href: "/" }
    ]
  },
  {
    title: "Developers",
    items: [
      { label: "Documentation", href: "/" },
      { label: "Hosted API", href: "/" },
      { label: "OSS", href: "/" }
    ]
  },
  {
    title: "Resources",
    items: [
      { label: "10-minute Primer", href: "/" },
      { label: "The Whitepaper", href: "/" },
      { label: "FAQ", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "About", href: "/" }
    ]
  },
  {
    title: "Community",
    items: [
      { label: "Twitter", href: "/" },
      { label: "Discord Chat", href: "/" },
      { label: "Forum", href: "/" },
      { label: "Reddit", href: "/" }
    ]
  }
]

const Footer = () => (
  <Box sx={{ bg: "text", color: "background" }}>
    <Container sx={{ pt: 5, pb: 4 }}>
      <Grid
        columns={[
          "minmax(auto, 184px)",
          "repeat(2, minmax(auto, 184px))",
          "repeat(4, minmax(auto, 184px))"
        ]}
        sx={{ justifyContent: "space-between" }}
      >
        {lists.map((list) => (
          <List key={`footer-list-${list.title}`} {...list} />
        ))}
      </Grid>
      <Divider size="100%" pushSx={{ opacity: 0.1, bg: "background", my: 4 }} />
      <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <LivepeerLogo isDark />
        <A color="primary">contact@livepeer.org</A>
        <Text variant="small">16 Vestry St, Floor 4, New York, NY 10013</Text>
        <Text variant="small">
          Copyright © 2020 Livepeer, Inc. All rights reserved.
        </Text>
      </Flex>
    </Container>
  </Box>
)

export default Footer
