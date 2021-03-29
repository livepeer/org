import PageLayout from "components/layouts/page";
import { Box, Container, Text, Grid, Link as A, Heading } from "theme-ui";
import { GraphQLClient } from "graphql-request";
import { print } from "graphql/language/printer";
import Link from "next/link";
import { HeadProps } from "components/primitives/head";
import allJobs from "../../queries/allJobs.gql";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const headProps: HeadProps = {
  meta: {
    title: "Jobs",
    description: "Join Us. From Anywhere.",
    url: "https://livepeer.org/jobs",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg",
    canonical: "https://livepeer.com/jobs",
  },
};

const Page = ({ positions }) => {
  const getFirstParagraph = (content) => {
    return !!content.split("\n")[1]
      ? content.split("\n")[1]
      : content.split("\n")[2];
  };

  return (
    <PageLayout
      headProps={headProps}
      navProps={{ background: "muted" }}
      footerProps={{ prefooter: { type: "faqs" } }}>
      <Container variant="hero">
        <Heading
          sx={{ variant: ["text.heading.hero", "text.heading.hero"], mb: 4 }}>
          Join Livepeer, Inc.
        </Heading>
      </Container>
      <Container sx={{ maxWidth: 960, margin: "0 auto" }}>
        <Grid columns={1} mb={5} gap={4}>
          {positions.map((p, i) => {
            return (
              <Link
                key={i}
                href={p.title === "All" ? "/jobs" : `/jobs/[slug]`}
                as={p.title === "All" ? "/jobs" : `/jobs/${p.slug.current}`}
                passHref>
                <A
                  sx={{
                    width: "100%",
                    display: "block",
                    textDecoration: "none",
                    color: "initial",
                    marginRight: "auto",
                    cursor: "pointer",
                    borderRadius: 24,
                    border: "1px solid",
                    borderColor: "#F0F0F0",
                    backgroundColor: "#FFF",
                    overflow: "hidden",
                    transition: "box-shadow .2s",
                    ":hover": {
                      textDecoration: "none",
                      color: "initial",
                      boxShadow:
                        "0px 2px 1px rgba(0, 0, 0, 0.04), 0px 16px 40px rgba(0, 0, 0, 0.04)",
                    },
                  }}>
                  <Box
                    sx={{
                      fontFamily: "special",
                      fontSize: [24, 32],
                      fontWeight: 600,
                      px: 4,
                      pt: 4,
                      mr: 4,
                      mb: 3,
                    }}>
                    {p.title}
                  </Box>
                  <Box
                    sx={{
                      color: "gray",
                      fontWeight: 400,
                      px: 4,
                      pb: 4,
                      mr: 4,
                    }}>
                    <Box
                      style={{
                        display: "box",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}>
                      {getFirstParagraph(p.body)}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      color: "secondary",
                      fontWeight: 600,
                      px: 4,
                      mr: 4,
                      mb: 4,
                    }}>
                    Apply
                  </Box>
                </A>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  const graphQLClient = new GraphQLClient(
    "https://dp4k3mpw.api.sanity.io/v1/graphql/production/default"
  );

  let data: any = await graphQLClient.request(print(allJobs), {
    where: {},
  });

  return {
    props: {
      positions: data.allJob,
      preview: false,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default Page;
