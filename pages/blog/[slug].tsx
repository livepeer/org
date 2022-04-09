import { staticRequest, gql } from "tinacms";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { useTina } from "tinacms/dist/edit-state";
import ReactMarkdown from "react-markdown";
import { Container } from "@theme-ui/components";

const query = gql`
  query BlogPostQuery($relativePath: String!) {
    getPostsDocument(relativePath: $relativePath) {
      data {
        title
        body
      }
    }
  }
`;

// Styles for markdown
const GlobalStyle = createGlobalStyle`
  h1,h2,h3,h4,h5 {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }
  blockquote {
    background-color: rgb(209,250,229);
  }
  h1 {
    font-size: 45px;
  }
  h2 {
    font-size: 35px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 22px;
  }
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
  }
  a {
    font-weight: bold;
    color: rgb(59,130,246);
    text-decoration: underline;
  }
  `;

// Use the props returned by get static props (this can be deleted when the edit provider and tina-wrapper are moved to _app.js)
const BlogPage = (props) => {
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <GlobalStyle />
      <Head>
        {/* Tailwind CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
          integrity="sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Marked CDN */}
      </Head>
      <script
        type="text/javascript"
        crossOrigin="anonymous"
        src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.0/marked.min.js"
      />
      <Container>
        <div>
          <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {data.getPostsDocument.data.title}
          </h1>
          <ReactMarkdown>{data.getPostsDocument.data.body}</ReactMarkdown>
        </div>
      </Container>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
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
      variables,
      data,
      //myOtherProp: 'some-other-data',
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData: any = await staticRequest({
    query: gql`
      query GetPostsList {
        getPostsList {
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
    paths: postsListData.getPostsList.edges.map((post) => ({
      params: { slug: post.node.sys.filename },
    })),
    fallback: false,
  };
};

export default BlogPage;
