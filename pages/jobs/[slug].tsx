import PageLayout from "components/layouts/page";
import { Box, Container, Grid, Heading, Text, Link as A } from "theme-ui";
import ReactMarkdown from "react-markdown";
import Code from "components/primitives/code";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Markdown from "components/primitives/markdown";
import {
  getJobs,
  getJobById,
  getQuestionIdsByJobId,
  getQuestionsById,
} from "lib/teamtailer/use-teamtailor";

const Page = ({ title, slug, body }) => {
  const headProps: HeadProps = {
    meta: {
      title: `${title}`,
      description: "Join Us. From Anywhere.",
      url: `https://livepeer.org/jobs/${slug}`,
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@LivepeerOrg",
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
            <Box as="div" dangerouslySetInnerHTML={{ __html: body }} />
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
  const allJobs = await getJobs();
  let paths = [];
  allJobs.map((page) => paths.push({ params: { slug: page.id } }));
  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ locale, params, preview = false }) {
  const { slug } = params;
  const job = await getJobById(slug);
  const questionIds = await getQuestionIdsByJobId(slug);

  const questions = [];
  for (const questionId of questionIds) {
    const question = await getQuestionsById(questionId.id);

    questions.push({
      id: question.id,
      type: question.attributes["question-type"],
      title: question.attributes.title,
    });
  }

  return {
    props: {
      title: job.attributes.title,
      body: job.attributes.body,
      name: job.attributes["name-requirement"],
      resume: job.attributes["resume-requirement"],
      coverLetter: job.attributes["cover-letter-requirement"],
      phone: job.attributes["phone-requirement"],
      questions,
      slug,
      preview,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default Page;
