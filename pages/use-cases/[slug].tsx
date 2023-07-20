import Layout from "components/layouts/page";
import Hero from "components/sections/hero";
import Why from "components/sections/why";
import CaseStudy from "components/sections/case-study";
import Prefooter from "components/sections/prefooter";
import { useRouter } from "next/router";
import { Box } from "@livepeer/design-system";
import { HeadProps } from "components/primitives/head";
import data from "./data.json";

const UseCase = ({ hero, why, caseStudy }) => {
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
      <Layout footerProps={{ prefooter: null }}>
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
    <Layout headProps={headProps}>
      <Hero
        tagline="Use cases"
        heading={hero.heading}
        description={hero.description}
        image={hero.image.asset.url}
        ctas={hero.ctas}
      />
      <Why
        title={why.title}
        heading={why.heading}
        description={why.description}
        reasons={why.reasons}
      />
      {caseStudy?.heading && (
        <CaseStudy
          heading={caseStudy.heading}
          about={caseStudy.about}
          problem={caseStudy.problem}
          solution={caseStudy.solution}
          image={caseStudy.image?.asset.url}
          testimonial={caseStudy?.testimonial}
          internalLink={caseStudy.internalLink}
        />
      )}
      <Prefooter />
    </Layout>
  );
};

export async function getStaticPaths() {
  let paths = [];

  for (let i = 0; i < data.length; i++) {
    paths.push({ params: { slug: data[i].slug.current } });
  }

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const useCase = data.filter((obj) => {
    return obj.slug.current === slug;
  })[0];
  return {
    props: {
      ...useCase,
    },
    revalidate: 1,
  };
}

export default UseCase;
