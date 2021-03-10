/** @jsx jsx */

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import globby from "globby";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import * as z from "zod";
import DocsNav from "components/sections/docs/docs-nav";
import DocsCard, { Icon } from "components/sections/docs/docs-card";
import { Heading, Text } from "components/sections/docs/docs-content";
import { jsx, useColorMode } from "theme-ui";
import DocsCardsContainer from "components/sections/docs/docs-cards-container";
import DocsMenu from "components/sections/docs/docs-menu";
import NextStep from "components/sections/docs/next-step";

type Params = { slug?: string[] };

const Docs = ({
  mdx,
  meta,
  path,
  title,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = hydrate(mdx, {
    components: {
      h1: ({ children }) => {
        return <Heading as="h1">{children}</Heading>;
      },
      h2: ({ children }) => {
        return <Heading as="h2">{children}</Heading>;
      },
      h3: ({ children }) => {
        return <Heading as="h3">{children}</Heading>;
      },
      p: ({ children }) => {
        return <Text>{children}</Text>;
      },
      DocsCard,
      DocsCardsContainer,
      Icon,
      NextStep,
    },
  });
  const [colorMode, setColorMode] = useColorMode();

  const slug = path ? path : "";

  const realSlug = slug.replace("/index.mdx", "");

  return (
    <div
      sx={{
        width: "100vw",
        transition: "all 0.2s",
        backgroundColor: "docs.background",
        position: "relative",
        pb: "60px",
      }}>
      <DocsNav
        selected={realSlug}
        setColorMode={setColorMode}
        colorMode={colorMode}
      />
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: ["24px", "24px", "24px", "80px"],
          mt: "60px",
        }}>
        <div
          sx={{
            display: ["none", "none", "flex"],
            position: "sticky",
            height: "calc(100vh - 120px)",
            top: "100px",
            overflowY: "scroll",
          }}>
          <DocsMenu selected={realSlug} />
        </div>
        <div
          sx={{
            width: "100%",
            maxWidth: ["100%", "100%", "730px"],
            color: "docs.text",
            display: "flex",
            flexDirection: "column",
          }}>
          {content}
        </div>
        <p
          sx={{
            display: ["none", "none", "none", "flex"],
            color: "docs.text",
          }}>
          {title}
        </p>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const filePaths = await globby("docs/**/*");

  const paths = filePaths.map((g) => {
    const clean = g
      .replace("docs/", "")
      .replace(".mdx", "")
      .split("/")
      .filter((p) => p !== "index");
    return { params: { slug: clean } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<Params>) => {
  const filePaths = await globby("docs/**/*");

  const fullSlug = `docs/${params?.slug?.join("/") ?? "index"}.mdx`;
  const fullSlugWithIndexEnding = `docs/${params?.slug?.join("/")}/index.mdx`;

  const filePath = filePaths.find(
    (filePath) => filePath === fullSlug || filePath === fullSlugWithIndexEnding
  );

  if (!filePath) {
    return { notFound: true };
  }

  const source = fs.readFileSync(path.join(process.cwd(), filePath));
  const { content, data } = matter(source);

  // Runtime validation to make sure we have the correct front matter data in our .mdx files
  const dataSchema = z.object({
    title: z.string(),
  });
  const parsedData = dataSchema.parse(data);

  const mdxSource = await renderToString(content, {
    components: {},
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const title = parsedData.title;

  return {
    props: {
      mdx: mdxSource,
      meta: parsedData,
      path: filePath,
      title: title,
    },
    revalidate: 1,
  };
};

export default Docs;
