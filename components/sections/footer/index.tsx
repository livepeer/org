import { Box, Container, Grid, Flex, Text } from "theme-ui"
import Divider from "components/primitives/divider"
import FooterList, { FooterListProps } from "./list"
import LogoAndEmail from "./logo-and-email"
import PrefooterBanner from "./prefooter-banner"
import PrefooterFaqBanner from "./prefooter-faq-banner"

const lists: FooterListProps[] = [
  {
    title: "Participants",
    items: [
      { label: "Tokenholders", href: "/tokenholders" },
      { label: "Video Miners", href: "/video-miners" },
      {
        label: "Protocol Explorer",
        href: "https://explorer.livepeer.org/",
        isExternal: true
      },
      {
        label: "The Grant Program",
        href: "https://github.com/livepeer/Grant-Program",
        isExternal: true
      }
    ]
  },
  {
    title: "Developers",
    items: [
      {
        label: "Documentation",
        href: "https://livepeer.readthedocs.io/",
        isExternal: true
      },
      { label: "Livepeer.com", href: "https://livepeer.com", isExternal: true },
      { label: "Open Source Software", href: "/oss" }
    ]
  },
  {
    title: "Resources",
    items: [
      {
        label: "10-minute Primer",
        href: "https://primer.livepeer.org/",
        isExternal: true
      },
      {
        label: "The Whitepaper",
        href: "https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md",
        isExternal: true
      },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "About Livepeer.org", href: "/about" }
    ]
  },
  {
    title: "Community",
    items: [
      {
        label: "Twitter",
        href: "https://twitter.com/livepeer",
        isExternal: true
      },
      {
        label: "Discord Chat",
        href: "https://discord.com/invite/RR4kFAh",
        isExternal: true
      },
      { label: "Forum", href: "https://forum.livepeer.org/", isExternal: true },
      {
        label: "Reddit",
        href: "https://www.reddit.com/r/livepeer/",
        isExternal: true
      }
    ]
  }
]

type Prefooter =
  | {
      type: "subscribe"
    }
  | { type: "faqs"; cta?: { label: string; href: string; asPath?: string } }

export type FooterProps = {
  isDark?: boolean
  prefooter?: Prefooter
}

const Footer = ({
  isDark = false,
  prefooter = { type: "subscribe" }
}: FooterProps) => (
  <Box as="footer" bg={isDark ? "text" : "background"}>
    {prefooter?.type === "subscribe" && <PrefooterBanner />}
    {prefooter?.type === "faqs" && <PrefooterFaqBanner cta={prefooter.cta} />}
    <Box sx={{ bg: "text", color: "background" }}>
      <Container sx={{ pt: [prefooter ? 6 : 5, 5], pb: 4 }}>
        <LogoAndEmail
          pushSx={{
            display: ["flex", null, null, "none"],
            flexDirection: "column",
            mb: 5
          }}
          pushLogoSx={{ mr: 0, mb: 3 }}
          id="footer-logo-mobile"
        />
        <Grid
          columns={[
            "minmax(auto, 184px)",
            null,
            null,
            "repeat(4, minmax(auto, 184px))"
          ]}
          gap={[5, null, null, 0]}
          sx={{ justifyContent: ["center", null, null, "space-between"] }}
        >
          {lists.map((list) => (
            <FooterList key={`footer-list-${list.title}`} {...list} />
          ))}
        </Grid>
        <Divider
          size="100%"
          pushSx={{
            opacity: 0.1,
            bg: ["transparent", null, null, "background"],
            my: 4
          }}
        />
        <Flex
          sx={{
            justifyContent: ["center", null, null, "space-between"],
            alignItems: "center"
          }}
        >
          <LogoAndEmail
            pushSx={{ display: ["none", null, null, "flex"] }}
            id="footer-logo-desktop"
          />
          <Text
            variant="small"
            sx={{ textAlign: ["center", null, null, "left"] }}
          >
            Copyright © 2020 Livepeer, Inc. All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  </Box>
)

export default Footer
