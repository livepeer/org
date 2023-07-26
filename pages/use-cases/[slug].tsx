import Layout from "components/layouts/page";
import Hero from "components/sections/hero";
import Logos from "components/sections/logos";
import Values from "components/sections/values";
import Features from "components/sections/features";
import CaseStudy from "components/sections/case-study";
import Prefooter from "components/sections/prefooter";
import { useRouter } from "next/router";
import { Box } from "@livepeer/design-system";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import fs from "fs";

const UseCase = ({ hero, logos, features, values, caseStudy }) => {
  const { isFallback, asPath } = useRouter();

  const headProps: HeadProps = {
    meta: {
      title: "Livepeer Case Study",
      description: "",
      url: asPath,
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  if (isFallback) {
    return (
      <Layout footerProps={{ prefooter: { type: null } }}>
        <Box
          sx={{
            py: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          Loading
        </Box>
      </Layout>
    );
  }
  return (
    <Layout headProps={headProps} footerProps={{ prefooter: { type: null } }}>
      <Hero
        tagline="Use cases"
        heading={hero.heading}
        description={hero.description}
        image={hero.image.url}
        ctas={hero.ctas}
      />
      <Logos logos={logos} />
      <Box css={{ mt: 80, bc: "$sage2" }}>
        <Values
          title={values.title}
          heading={values.heading}
          description={values.description}
          items={values.items}
        />
      </Box>
      {features && (
        <Features
          title={features.title}
          heading={features.heading}
          description={features.description}
          reasons={features.reasons}
        />
      )}
      {caseStudy?.heading && (
        <Box css={{ bc: features ? "$sage2" : "initial" }}>
          <CaseStudy
            heading={caseStudy.heading}
            about={caseStudy.about}
            problem={caseStudy.problem}
            solution={caseStudy.solution}
            image={caseStudy.image?.url}
            testimonial={caseStudy?.testimonial}
            cta={caseStudy.cta}
          />
        </Box>
      )}
      <Prefooter />
    </Layout>
  );
};

export async function getStaticPaths() {
  const folder = "./pages/use-cases/content/";
  const paths = [];

  fs.readdirSync(folder).forEach((file) => {
    paths.push({ params: { slug: file.slice(0, -5) } });
  });

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const data = require(`./content/${slug}.json`);

  return {
    props: {
      ...data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default UseCase;
