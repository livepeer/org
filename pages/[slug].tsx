import { staticRequest, gql } from "tinacms";
import { useTina } from "tinacms/dist/edit-state";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import PageLayout from "components/layouts/page";
import { HeadProps } from "components/primitives/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Container, Flex, Box } from "@theme-ui/components";

const query = gql`
  query PageQuery($relativePath: String!) {
    getPagesDocument(relativePath: $relativePath) {
      data {
        title
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

  const headProps: HeadProps = {
    meta: {
      title: "Grants",
      description:
        "A listing of the grant programs throughout the Livepeer ecosystem.",
      url: "https://livepeer.org/grants",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  // console.log(data);
  return (
    <PageLayout headProps={headProps}>
      <Container className="markdown-body" sx={{ mt: 24 }}>
        <Flex sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Flex sx={{ alignItems: "center" }}>
            <Box sx={{ color: "gray" }}>Home</Box>
            <Box sx={{ mx: 2 }}>/</Box>
            <Box sx={{ fontWeight: "bold" }}>Grants</Box>
          </Flex>
          <Box sx={{ mt: 3, color: "gray" }}>
            Page last updated:{" "}
            {new Date(
              data.getPagesDocument.data.updatedAt
            ).toLocaleDateString()}
          </Box>
        </Flex>
        <TinaMarkdown content={data.getPagesDocument.data.body} />
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
