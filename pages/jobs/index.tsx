import PageLayout from "components/layouts/page";
import { Container, Heading, Box } from "theme-ui";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import JobsSection from "components/sections/jobs";
import { useRouter } from "next/router";

const headProps: HeadProps = {
  meta: {
    title: "Jobs",
    description: "Join Us. From Anywhere.",
    url: "https://livepeer.org/jobs",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@Livepeer",
  },
};

const Page = ({ allJobs }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <PageLayout
        headProps={headProps}
        navProps={{ background: "muted" }}
        footerProps={{ prefooter: { type: "faqs" } }}>
        <Box
          sx={{
            padding: "60px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          Loading...
        </Box>
      </PageLayout>
    );
  }
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
        <JobsSection jobs={allJobs} />
      </Container>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  const jobsRes = await fetch(`https://livepeer.org/api/teamtailor/jobs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  return {
    props: {
      allJobs: jobsRes.data,
      preview: false,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default Page;
