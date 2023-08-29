import PageLayout from "components/layouts/page";
import { Box, Heading, Text, Container } from "@livepeer/design-system";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Pricing from "components/sections/pricing";
import ReactMarkdown from "react-markdown";
import { promises as fs } from "fs";
import path from "path";
import { Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

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
              Pricing
            </Heading>
            <Text size={5} css={{ lineHeight: 1.7 }}>
              Livepeer Studio provides hosted Livepeer node infrastructure for
              you, allowing you to focus on building your video applications.
              Information about its pricing structure can be found below.
            </Text>
          </Box>
        </Container>
        <Pricing />
        {/* <Container
          size="4"
          css={{
            maxWidth: "1245px",
            mb: "$8",
          }}>
          <Box>
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                The Livepeer network is open and permissionless, which means
                anyone can run their own Livepeer node and pay the network
                directly, with no middleman. However, running and scaling your
                own node infrastructure can be challenging, especially when
                getting started or scaling rapidly. Enter Livepeer gateway
                providers. Gateway providers host optimized Livepeer node
                infrastructure for you, allowing you to focus on building your
                video applications instead. Livepeer Inc, the initial team
                behind the Livepeer protocol, operates the most popular hosted
                gateway. Information about its pricing structure can be found
                below.
              </Callout.Text>
            </Callout.Root>
          </Box>
        </Container> */}
        <Container
          css={{
            maxWidth: "960px",
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
