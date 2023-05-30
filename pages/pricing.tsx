import PageLayout from "components/layouts/page";
import { Box, Heading, Text, Container } from "@livepeer/design-system";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Pricing from "components/sections/pricing";
import ReactMarkdown from "react-markdown";
import { promises as fs } from "fs";
import path from "path";

const PricingPage = ({ markdownContent }) => {
  const headProps: HeadProps = {
    meta: {
      title: "Livepeer Pricing",
      description: "Flexible pricing for projects of all sizes",
      url: "https://livepeer.org/pricing",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };
  return (
    <PageLayout headProps={headProps} footerProps={{ prefooter: null }}>
      <Box css={{ position: "relative" }}>
        <Container
          size="4"
          css={{
            maxWidth: "1245px",
            px: "$6",
            py: "$7",
            width: "100%",
            "@bp3": {
              py: "$8",
              px: "$4",
            },
          }}>
          <Box css={{ textAlign: "center", maxWidth: 960, m: "0 auto" }}>
            <Heading as="h1" size="4" css={{ fontWeight: 600, mb: "$6" }}>
              Livepeer Pricing
            </Heading>
            <Text size={6}>
              Running your own Livepeer node infrastructure can be challenging,
              especially when getting started or scaling fast. Service providers
              run optimized node infrastructure for you, so you can focus on
              building your video applications or product instead.
              <br />
              <br />
              Livepeer Inc, the initial team behind the Livepeer protocol,
              operates the most popular hosted gateway service. Information
              about its pricing structure can be found below.
            </Text>
          </Box>
        </Container>
        <Pricing />
        <Container
          size="4"
          css={{
            maxWidth: "1245px",
            pb: 100,
            mx: "auto",
          }}>
          <Box className="markdown-body">
            <ReactMarkdown children={markdownContent} />
          </Box>
        </Container>
      </Box>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  const filePath = path.join(
    process.cwd(),
    "components/sections/pricing",
    "faq.md"
  );
  const markdownContent = await fs.readFile(filePath, "utf8");

  return {
    props: {
      markdownContent,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default PricingPage;
