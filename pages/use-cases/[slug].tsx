import Layout from "components/layouts/page";
import Hero from "components/sections/hero";
import Logos from "components/sections/logos";
import CardGrid from "components/sections/card-grid";
import Why from "components/sections/why";
import CaseStudy from "components/sections/case-study";
import Prefooter from "components/sections/prefooter";
import { useRouter } from "next/router";
import { Box } from "@livepeer/design-system";
import { HeadProps } from "components/primitives/head";
import data from "./data.json";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const UseCase = ({ hero, logos, why, cardGrid, caseStudy }) => {
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
        <Why
          title={why.title}
          heading={why.heading}
          description={why.description}
          reasons={why.reasons}
        />
      </Box>
      <CardGrid
        title={cardGrid.title}
        heading={cardGrid.heading}
        description={cardGrid.description}
        items={cardGrid.items}
      />
      {caseStudy?.heading && (
        <Box css={{ bc: "$sage2" }}>
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
  let paths = [];

  for (let i = 0; i < data.length; i++) {
    paths.push({ params: { slug: data[i].slug.current } });
  }

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const useCase = data.filter((obj) => {
    return obj.slug.current === slug;
  })[0];
  return {
    props: {
      ...useCase,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 1,
  };
}

export default UseCase;
