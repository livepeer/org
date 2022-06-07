import PageLayout from "components/layouts/page";
import { Box, Container, Grid, Heading } from "theme-ui";
import JobApplicationForm from "components/sections/jobs/form";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { HeadProps } from "components/primitives/head";

const Page = ({
  title,
  slug,
  body,
  questions,
  name,
  resume,
  coverLetter,
  phone,
}) => {
  const headProps: HeadProps = {
    meta: {
      title: `${title}`,
      description: "Join Us. From Anywhere.",
      url: `https://livepeer.org/jobs/${slug}`,
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
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
          pb: 4,
          ul: { marginBottom: 4 },
          p: { marginBottom: 4 },
        }}>
        <Heading
          variant="heading.1"
          sx={{
            textAlign: "left",
            lineHeight: ["42px", "72px"],
            marginTop: 5,
            marginBottom: 4,
            fontSize: ["32px", "56px"],
          }}>
          {title}
        </Heading>
        <Grid
          sx={{
            maxWidth: 1200,
            marginX: "auto",
            gridTemplateColumns: "repeat(1,1fr)",
            ["@media (min-width: 768px)"]: {
              gridTemplateColumns: "repeat(2,1fr)",
            },
          }}>
          <Box
            sx={{
              "p, div, ul, li": {
                lineHeight: 1.8,
              },
              ul: {
                listStyle: "initial",
                paddingLeft: 40,
              },
              "h1, h2, h3, h4, h5, h6": {
                lineHeight: 1.5,
              },
              figure: {
                m: 0,
              },
              img: {
                width: "100%",
              },
              a: {
                color: "secondary",
              },
              h2: {
                fontSize: 5,
                fontWeight: 500,
                marginBottom: 3,
              },
              h3: {
                fontSize: 4,
                fontWeight: 500,
                marginBottom: 3,
              },
            }}>
            <div dangerouslySetInnerHTML={{ __html: body }} />
          </Box>
          <Box
            sx={{
              position: "sticky",
              top: "100px",
              display: "block",
              alignSelf: "start",
              mx: "auto",
              mt: "100px",
              "@bp2": {
                mr: "0",
              },
            }}>
            <JobApplicationForm
              id={slug}
              name={name}
              questions={questions}
              resume={resume}
              coverLetter={coverLetter}
              phone={phone}
            />
          </Box>
        </Grid>
      </Container>
    </PageLayout>
  );
};
export async function getStaticPaths() {
  const jobsRes = await fetch(`https://livepeer.org/api/teamtailor/jobs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  let paths = [];
  jobsRes.data.map((page) => paths.push({ params: { slug: page.id } }));
  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params, locale, preview = false }) {
  const { slug } = params;

  const jobRes = await fetch(
    `https://livepeer.org/api/teamtailor/jobs/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());

  const questionIdsRes = await fetch(
    `https://livepeer.org/api/teamtailor/questionids/${slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());

  const qIdsData = questionIdsRes["data"];
  const questions = [];
  if (qIdsData)
    for (const questionId of qIdsData) {
      const questionRes = await fetch(
        `https://livepeer.org/api/teamtailor/questions/${questionId.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((response) => response.json());

      questions.push({
        ...questionRes.data,
      });
    }

  return {
    props: {
      ...jobRes.data,
      questions,
      slug,
      preview,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default Page;
