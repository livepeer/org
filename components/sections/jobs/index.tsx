import { Flex, Heading, Container, Link as A } from "theme-ui";
import Link from "next/link";

const JobsSection = ({ jobs }) => {
  return (
    <Container css={{ maxWidth: 960, margin: "0 auto 80px" }}>
      {jobs.map((j, i) => (
        <Flex
          key={i}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 -1px 0 0 rgb(238 237 239)",
            padding: 35,
            transition: "all 200ms ease-in-out",
            "&:hover": {
              backgroundColor: "$loContrast",
              boxShadow: "0 0 30px 0 rgb(238 237 239)",
              borderRadius: "8px",
            },
          }}>
          <Link href="/jobs/[slug]" as={`/jobs/${j.id}`} passHref>
            <A
              css={{
                textDecoration: "none",
              }}>
              <Heading as="h2" sx={{ fontWeight: "500" }}>
                {j.title}
              </Heading>
            </A>
          </Link>
          <Link href="/jobs/[slug]" as={`/jobs/${j.id}`} passHref>
            <A variant="accent">Apply</A>
          </Link>
        </Flex>
      ))}
    </Container>
  );
};

export default JobsSection;
