import PageLayout from "components/layouts/page";
import { Box, Container, Grid, Link as A, Heading } from "theme-ui";
import Link from "next/link";
import { HeadProps } from "components/primitives/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getJobs } from "lib/teamtailer/use-teamtailor";

const headProps: HeadProps = {
  meta: {
    title: "Jobs",
    description: "Join Us. From Anywhere.",
    url: "https://livepeer.org/jobs",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg",
  },
};

const Page = ({ positions }) => {
  const getFirstParagraph = (content) => {
    const result = content.match(/<span>(.*?)<\/span>/g);
    return result ? result[0] : null;
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
                as={p.title === "All" ? "/jobs" : `/jobs/${p.slug}`}
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
                      <Box
                        as="div"
                        dangerouslySetInnerHTML={{
                          __html: getFirstParagraph(p.body),
                        }}
                      />
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
  const allJobs = await getJobs();

  return {
    props: {
      positions: allJobs,
      preview: false,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default Page;
