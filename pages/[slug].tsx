import { staticRequest, gql } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageLayout from "components/layouts/page";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container, Flex, Box, Link as A } from "@theme-ui/components";
import Link from "next/link";

const query = gql`
  query PageQuery($relativePath: String!) {
    getPagesDocument(relativePath: $relativePath) {
      data {
        title
        description
        body
        updatedAt
      }
    }
  }
`;

// Use the props returned by get static props (this can be deleted when the edit provider and tina-wrapper are moved to _app.js)
const Page = (props) => {
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  const { title, description, updatedAt, body } = data.getPagesDocument.data;

  const headProps: HeadProps = {
    meta: {
      title,
      description,
      url: `https://livepeer.org/${props.slug}`,
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };
  return (
    <PageLayout headProps={headProps}>
      <Container className="markdown-body" sx={{ maxWidth: 960, mt: 24 }}>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Flex sx={{ alignItems: "center" }}>
            <Box sx={{ color: "gray", fontWeight: 500 }}>
              <Link href="/" passHref>
                <A sx={{ color: "gray !important" }}>Home</A>
              </Link>
            </Box>
            <Box sx={{ mx: 2 }}>/</Box>
            <Box sx={{ fontWeight: "bold" }}>{title}</Box>
          </Flex>
          <Box sx={{ mt: 3, color: "gray" }}>
            Page last updated: {new Date(updatedAt).toLocaleDateString()}
          </Box>
        </Flex>
        <TinaMarkdown content={body} />
      </Container>
    </PageLayout>
  );
};

export const getStaticProps = async ({ params, locale }) => {
  const variables = { relativePath: `${params.slug}.md` };
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      slug: params.slug,
      ...(await serverSideTranslations(locale, ["common"])),
      variables,
      data,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const pagesListData: any = await staticRequest({
    query: gql`
      query GetPagesList {
        getPagesList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  });

  return {
    paths: pagesListData.getPagesList.edges.map((page) => ({
      params: { slug: page.node.sys.filename },
    })),
    fallback: false,
  };
};

export default Page;
