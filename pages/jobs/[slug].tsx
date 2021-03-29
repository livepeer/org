import PageLayout from "components/layouts/page";
import { Box, Container, Grid, Heading, Text, Link as A } from "theme-ui";
import { GraphQLClient, request } from "graphql-request";
import { print } from "graphql/language/printer";
import ReactMarkdown from "react-markdown";
import allJobs from "../../queries/allJobs.gql";
import Code from "components/primitives/code";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Markdown from "components/primitives/markdown";

const Page = ({ title, slug, body }) => {
  const headProps: HeadProps = {
    meta: {
      title: `Livepeer - ${title}`,
      description: "Join Us. From Anywhere.",
      url: `https://livepeer.org/jobs/${slug}`,
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@LivepeerOrg",
      canonical: `https://livepeer.com/jobs/${slug}`,
    },
  };
  return (
    <PageLayout
      headProps={headProps}
      navProps={{ background: "muted" }}
      footerProps={{ prefooter: { type: "faqs" } }}
      pushContentSx={{ overflow: "initial" }}>
      <Container
        sx={{
          pb: 5,
          ul: { mb: 4 },
          p: { mb: 4 },
        }}>
        <Heading
          variant="heading.1"
          sx={{
            textAlign: "left",
            lineHeight: ["42px", "72px"],
            my: 5,
            fontSize: ["32px", "56px"],
          }}>
          {title}
        </Heading>
        <Grid columns={[1, 1, 2]} sx={{ maxWidth: 1200, margin: "0 auto" }}>
          <Markdown>
            <ReactMarkdown children={body} renderers={{ code: Code }} />
          </Markdown>

          <Box
            sx={{
              position: "sticky",
              top: "100px",
              display: "block",
              alignSelf: "start",
              width: ["100%", null, "380px"],
              ml: "auto",
              p: 4,
              textDecoration: "none",
              color: "initial",
              marginRight: "auto",
              borderRadius: 24,
              border: "1px solid",
              borderColor: "#F0F0F0",
              backgroundColor: "#FFF",
              overflow: "hidden",
              transition: "box-shadow .2s",
              ":hover": {
                textDecoration: "none",
                boxShadow:
                  "0px 2px 1px rgba(0, 0, 0, 0.04), 0px 16px 40px rgba(0, 0, 0, 0.04)",
              },
            }}>
            <Text sx={{ fontSize: 20, mb: 4, fontWeight: 600 }}>
              How to Apply
            </Text>
            <Text sx={{ color: "gray", mb: 4 }}>
              If you are interested in applying for this position, please send
              an email containing your Github profile and/or LinkedIn.
            </Text>
            <A
              variant="buttons.primary"
              sx={{ display: "flex", width: "100%" }}
              href="mailto:work@livepeer.org">
              Send email
            </A>
          </Box>
        </Grid>
      </Container>
    </PageLayout>
  );
};

export async function getStaticPaths({ locales }) {
  const { allJob } = await request(
    "https://dp4k3mpw.api.sanity.io/v1/graphql/production/default",
    print(allJobs),
    {
      where: {},
    }
  );

  let paths = [];
  for (const page of allJob) {
    for (const locale of locales) {
      paths.push({ locale, params: { slug: page.slug.current } });
    }
  }

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ locale, params, preview = false }) {
  const { slug } = params;
  const graphQLClient = new GraphQLClient(
    "https://dp4k3mpw.api.sanity.io/v1/graphql/production/default"
  );

  let data: any = await graphQLClient.request(print(allJobs), {
    where: {
      slug: { current: { eq: slug } },
    },
  });

  let job = data.allJob.find((j) => j.slug.current === slug);

  return {
    props: {
      ...job,
      slug,
      preview,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default Page;
