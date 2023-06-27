import { Box, Container, Grid, Flex, Text } from "theme-ui";
import Divider from "components/primitives/divider";
import FooterList, { FooterListProps } from "./list";
import LogoAndEmail from "./logo-and-email";
import PrefooterBanner from "./prefooter-banner";
import PrefooterFaqBanner from "./prefooter-faq-banner";
import { useTranslation } from "next-i18next";

type Prefooter =
  | {
      type: "none";
    }
  | {
      type: "subscribe";
    }
  | { type: "jobs"; cta?: { label: string; href: string; asPath?: string } }
  | { type: "faqs"; cta?: { label: string; href: string; asPath?: string } };

export type FooterProps = {
  isDark?: boolean;
  prefooter?: Prefooter;
};

const Footer = ({
  isDark = false,
  prefooter = { type: "subscribe" },
}: FooterProps) => {
  const { t } = useTranslation(["common"]);

  const lists: FooterListProps[] = [
    {
      title: t("nav-ecosystem"),
      items: [
        {
          label: "Showcase",
          href: "/ecosystem",
        },
        {
          label: t("nav-protocol-explorer"),
          href: "https://explorer.livepeer.org/",
          isExternal: true,
        },
        {
          label: "Livepeer Grants",
          href: "https://github.com/livepeer/Grant-Program",
          isExternal: true,
        },
      ],
    },
    {
      title: t("nav-developers"),
      items: [
        {
          label: "Documentation",
          href: "https://docs.livepeer.org",
          isExternal: true,
        },
        {
          label: "Pricing",
          href: "/pricing",
        },
        {
          label: "Livepeer.js",
          href: "https://livepeerjs.org",
          isExternal: true,
        },
        { label: t("nav-open-source-software"), href: "/oss" },
        {
          label: "Bug Bounty",
          href: "https://immunefi.com/bounty/livepeer/",
          isExternal: true,
        },
      ],
    },
    {
      title: t("nav-resources"),
      items: [
        {
          label: t("nav-ten-minute-primer"),
          href: "/primer",
        },
        {
          label: t("nav-the-whitepaper"),
          href: "https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md",
          isExternal: true,
        },
        {
          label: "Brand Assets",
          href: "/brand.zip",
          download: true,
        },
      ],
    },
    {
      title: t("nav-community"),
      items: [
        {
          label: "Twitter",
          href: "https://twitter.com/Livepeer",
          isExternal: true,
        },
        {
          label: "Discord Chat",
          href: "https://discord.gg/livepeer",
          isExternal: true,
        },
        {
          label: "Blog",
          href: "https://medium.com/livepeer-blog",
          isExternal: true,
        },
        {
          label: "Forum",
          href: "https://forum.livepeer.org/",
          isExternal: true,
        },
        {
          label: "Reddit",
          href: "https://www.reddit.com/r/livepeer/",
          isExternal: true,
        },
        {
          label: "Telegram",
          href: "https://t.me/livepeerorg",
          isExternal: true,
        },
      ],
    },
    {
      title: t("nav-about-livepeer"),
      items: [
        { label: t("nav-about"), href: "/about" },
        { label: "Jobs", href: "/jobs" },
        {
          label: t("nav-privacy-policy"),
          href: "/privacy-policy",
        },
        {
          label: "Terms of Service",
          href: "/terms-of-service",
        },
        {
          label: t("nav-contact"),
          href: "mailto:contact@livepeer.org",
        },
      ],
    },
  ];
  return (
    <Box as="footer" bg={isDark ? "text" : "background"}>
      {prefooter?.type === "subscribe" && <PrefooterBanner />}
      {prefooter?.type === "faqs" && <PrefooterFaqBanner />}
      <Box sx={{ bg: "text", color: "background" }}>
        <Container sx={{ pt: [prefooter ? 6 : 5, 5], pb: 4 }}>
          <LogoAndEmail
            pushSx={{
              display: ["flex", null, null, "none"],
              flexDirection: "column",
              mb: 5,
            }}
            pushLogoSx={{ mr: 0, mb: 3 }}
            id="footer-logo-mobile"
          />
          <Grid
            columns={[
              "minmax(auto, 184px)",
              null,
              null,
              "repeat(5, minmax(auto, 184px))",
            ]}
            gap={[5, null, null, 0]}
            sx={{
              mb: 5,
              justifyContent: ["center", null, null, "space-between"],
            }}>
            {lists.map((list) => (
              <FooterList key={`footer-list-${list.title}`} {...list} />
            ))}
          </Grid>
          <Divider
            size="100%"
            pushSx={{
              opacity: 0.1,
              bg: ["transparent", null, null, "background"],
              my: 4,
            }}
          />
          <Flex
            sx={{
              justifyContent: ["center", null, null, "space-between"],
              alignItems: "center",
            }}>
            <LogoAndEmail
              pushSx={{ display: ["none", null, null, "flex"] }}
              id="footer-logo-desktop"
            />
            <Text
              variant="small"
              sx={{ textAlign: ["center", null, null, "left"] }}>
              Copyright © {new Date().getFullYear()} Livepeer, Inc.
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
