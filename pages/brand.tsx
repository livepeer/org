/** @jsx jsx */
import { jsx, Box, Heading, Text, Container, Link as A } from "theme-ui";
import PageLayout from "components/layouts/page";
import IconHero from "components/layouts/icon-hero";
import { FiBook } from "react-icons/fi";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import LivepeerLogo, {
  LivepeerLogotype,
  LivepeerLogomark,
} from "components/svgs/livepeer-logo";

const Row = ({ heading, description, items }) => {
  return (
    <Box sx={{ mb: 6 }}>
      <Heading sx={{ mb: 3, color: "white", fontSize: 5, fontWeight: 500 }}>
        {heading}
      </Heading>
      <Text color="#969799" sx={{ mb: 40 }}>
        {description}
      </Text>
      <Box
        css={{
          display: "grid",
          "grid-template-columns": "repeat(auto-fit, minmax(0, 1fr))",
          "grid-gap": "24px",
          gap: "24px",
        }}>
        {items.map((item) => {
          return (
            <Box
              sx={{
                backgroundColor: item.color,
                border: "1px solid #23252a",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                flex: "1 1",
                height: "300px",
              }}>
              {item.content}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
const BrandPage = () => {
  const { t } = useTranslation(["oss"]);
  const headProps: HeadProps = {
    meta: {
      title: "Brand Guidelines",
      description:
        "Resources for presenting the Livepeer brand consistently and professionally.",
      url: "https://livepeer.org/brand",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };
  return (
    <PageLayout
      headProps={headProps}
      pushContentSx={{ bg: "#181818", color: "white" }}
      isDark>
      <IconHero
        pushSx={{ textAlign: "center" }}
        icon={<FiBook />}
        title="Livepeer Brand Guidelines"
        subtitle={
          <Box>
            <Box>
              Resources for presenting the Livepeer brand consistently and
              professionally.
            </Box>
            <A
              variant="buttons.primary"
              href="/brand.zip"
              sx={{ mt: 4, fontSize: 3 }}>
              Download Brand Assets
            </A>
          </Box>
        }
        background="dark"
        withAnimation
      />
      <Box
        css={{
          height: "2px",
          width: "100%",
          "--direction": "to right",
          "--color": "rgba(255,255,255,0.1)",
          background:
            "linear-gradient(var(--direction), transparent, var(--color) 50%, transparent)",
        }}
      />
      <Box sx={{ py: 80 }}>
        <Container sx={{ maxWidth: 960, mx: "auto" }}>
          <Row
            heading="Logotype (Wordmark)"
            description="The Livepeer logotype should be featured in all instances where
              Livepeer is mentioned, provided there is sufficient space.
              Preferably, use the monochrome version with the designated brand
              colors shown below."
            items={[
              {
                content: <LivepeerLogotype isDark={true} width={160} />,
                color: "primary",
              },
              {
                content: <LivepeerLogotype isDark={true} width={160} />,
                color: "#181818",
              },
              {
                content: <LivepeerLogotype width={160} />,
                color: "white",
              },
            ]}
          />
          <Row
            heading="Logomark (Icon)"
            description="In compact layouts or logo-only grids, the Livepeer logomark
              serves as a succinct representation of the brand."
            items={[
              {
                content: <LivepeerLogomark isDark={true} width={70} />,
                color: "primary",
              },
              {
                content: <LivepeerLogomark isDark={true} width={70} />,
                color: "#181818",
              },
              {
                content: <LivepeerLogomark width={70} />,
                color: "white",
              },
            ]}
          />
          <Row
            heading="Combination Mark (Icon + Wordmark)"
            description={`The combination mark combines the logomark and logotype to create a unique logo lockup that is both recognizable and versatile.`}
            items={[
              {
                content: <LivepeerLogo isDark={true} width={190} />,
                color: "primary",
              },
              {
                content: <LivepeerLogo isDark={true} width={190} />,
                color: "#181818",
              },
              {
                content: <LivepeerLogo width={190} />,
                color: "white",
              },
            ]}
          />
          <Row
            heading="Livepeer Colors"
            description={`Livepeer's primary brand color, "Circuit green", works well on
              both light and dark backgrounds.`}
            items={[
              {
                content: (
                  <Box
                    sx={{
                      fontSize: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <Box sx={{ fontWeight: 600 }}>Circuit Green</Box>
                    <Box>#30A46C</Box>
                  </Box>
                ),
                color: "primary",
              },
              {
                content: (
                  <Box
                    sx={{
                      fontSize: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}>
                    <Box sx={{ fontWeight: 600 }}>Charcoal Black</Box>
                    <Box>#181818</Box>
                  </Box>
                ),
                color: "#181818",
              },
              {
                content: (
                  <Box
                    sx={{
                      fontSize: 1,
                      display: "flex",
                      flexDirection: "column",
                      color: "#181818",
                    }}>
                    <Box sx={{ fontWeight: 600 }}>Snow White</Box>
                    <Box>#f9f9f9</Box>
                  </Box>
                ),
                color: "#f9f9f9",
              },
            ]}
          />
        </Container>
      </Box>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "oss"])),
    },
    revalidate: 1,
  };
}

export default BrandPage;
