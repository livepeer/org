import PageLayout from "components/layouts/page";
import { Container, Text, Link as A } from "@theme-ui/components";
import TeamSection from "components/sections/team";
import { GraphQLClient } from "graphql-request";
import { print } from "graphql/language/printer";
import { HeadProps } from "components/primitives/head";
import allPages from "../queries/allPages.gql";

const headProps: HeadProps = {
  meta: {
    title: "Livepeer - Team",
    description:
      "Livepeer, Inc. is building the future of video infrastructure services.",
    url: "https://livepeer.org/team",
    siteName: "Livepeer.org",
    image: "https://livepeer.org/OG.png",
    twitterUsername: "@LivepeerOrg",
    canonical: "https://livepeer.com/team",
  },
};

const TeamPage = ({ content }) => {
  const [, { teamMembers }] = content;
  return (
    <PageLayout
      headProps={headProps}
      navProps={{ background: "muted" }}
      footerProps={{ prefooter: { type: "jobs" } }}>
      <Container variant="hero">
        <Text as="h1" sx={{ variant: "text.heading.hero" }}>
          We’re building the future of video infrastructure services.
        </Text>
        <Text sx={{ maxWidth: 728, variant: "text.heroDescription", mb: 5 }}>
          Livepeer, Inc. is comprised of team members all over the world
          dedicated to building the world's open video infrastructure by
          facilitating Livepeer's early development, bootstrapping the network’s
          supply and demand sides, and guiding the project’s{" "}
          <A
            href="https://medium.com/livepeer-blog/livepeers-path-to-decentralization-a9267fd16532"
            target="_blank"
            rel="noopener noreferrer"
            variant="accent">
            path to decentralization
          </A>
          .
        </Text>
      </Container>
      <TeamSection teamMembers={teamMembers} />
    </PageLayout>
  );
};

export async function getStaticProps() {
  const graphQLClient = new GraphQLClient(
    "https://dp4k3mpw.api.sanity.io/v1/graphql/production/default"
  );

  const data = await graphQLClient.request(print(allPages), {
    where: {
      slug: { current: { eq: "team" } },
    },
  });

  return {
    props: {
      ...data.allPage[0],
    },
    revalidate: 1,
  };
}

export default TeamPage;
