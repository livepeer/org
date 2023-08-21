import PageLayout from "components/layouts/page";
import CompareHero from "components/sections/compare/hero";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import CompareTable from "components/sections/compare/table";
import { Container, Flex, Box, Button } from "@livepeer/design-system";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import Prefooter from "components/sections/prefooter";
import { Callout } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import WhyLivepeer from "components/sections/home/why-livepeer";

const Compare = () => {
  const { t } = useTranslation(["developers"]);

  const headProps: HeadProps = {
    meta: {
      title: "Compare Livepeer",
      description: "Compare Livepeer to other video infrastructure providers.",
      url: "https://livepeer.org/compare",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  return (
    <PageLayout
      headProps={headProps}
      footerProps={{ prefooter: { type: null } }}>
      <Container size={3}>
        <CompareHero
          title="Compare Livepeer"
          subtitle="Livepeer is a new approach to video infrastructure with a feature-rich video stack for global applications. Learn how its features and pricing compare to other video infrastructure providers."
          background="light"
          cta={
            <Flex align="center" gap={1}>
              <Link href="https://livepeer.studio" passHref>
                <Button
                  target="_blank"
                  size={3}
                  as="a"
                  css={{ mr: "$2", display: "flex", gap: "$2" }}
                  variant="green">
                  Start building
                  <FiArrowUpRight />
                </Button>
              </Link>

              <Link
                href="https://livepeer.typeform.com/to/HTuUHdDR#lead_source=Website%20-%20Contact%20an%20Expert&contact_owner=xxxxx"
                passHref>
                <Button
                  target="_blank"
                  size={3}
                  as="a"
                  css={{ mr: "$2", display: "flex", gap: "$2" }}>
                  Talk to a Livepeer expert
                  <FiArrowUpRight />
                </Button>
              </Link>
            </Flex>
          }
        />
      </Container>
      <Box
        css={{
          mt: "$4",
          pt: "$8",
          bc: "$gray1",
          borderTop: "1px solid $gray4",
          borderBottom: "1px solid $gray4",
          py: "$7",
        }}>
        <Container size={3}>
          <CompareTable />
          <Box css={{ mt: "$4" }}>
            <Callout.Root>
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text>
                All feature and pricing information is sourced from available
                online information as of 7/28/2023.
              </Callout.Text>
            </Callout.Root>
          </Box>
        </Container>
      </Box>
      <Box css={{ mt: "$4" }}>
        <Container size={3} css={{ pb: 0 }}>
          <WhyLivepeer
            pushSx={{ pb: 0 }}
            title="The Livepeer Difference"
            width="325px"
          />
        </Container>
      </Box>
      <Prefooter />
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "developers"])),
    },
    revalidate: 1,
  };
}

export default Compare;
