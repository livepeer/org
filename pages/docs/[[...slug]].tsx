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
import DocsMenu, { Menu } from "components/sections/docs/docs-menu";
import NextStep from "components/sections/docs/next-step";

type Params = { slug?: string[] };

const Docs = ({
  mdx,
  meta,
  path,
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
        minHeight: "100vh",
        backgroundColor: "docs.background",
        position: "relative",
        pb: "40px",
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
            height: "calc(100vh - 118px)",
            top: "118px",
            overflowY: "auto",
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
            position: "sticky",
            height: "calc(100vh - 118px)",
            top: "118px",
            display: ["none", "none", "none", "flex"],
            color: "docs.text",
            overflowY: "auto",
          }}>
          {meta?.title}
        </p>
      </div>
    </div>
  );
};

function getHref(filePath: string) {
  const clean = filePath
    .replace("docs/", "")
    .replace("index.mdx", "")
    .replace(".mdx", "");
  return clean;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const filePaths = await globby("docs/**/*");

  const paths = filePaths.map((g) => {
    const href = getHref(g);
    const clean = href.split("/");
    return { params: { slug: clean } };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

// Runtime validation to make sure we have the correct front matter data in our .mdx files
const dataSchema = z.object({
  title: z.string(),
});

function getFileContent(filePath: string) {
  const source = fs.readFileSync(path.join(process.cwd(), filePath));
  const { content, data } = matter(source);
  const parsedData = dataSchema.parse(data);
  return { content, meta: parsedData };
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<Params>) => {
  const filePaths = await globby("docs/**/*");

  const fullSlug = `docs/${params?.slug?.join("/") ?? "index"}.mdx`;
  const fullSlugWithIndexEnding = `docs/${params?.slug?.join("/")}/index.mdx`;

  const filePath = filePaths.find(
    (filePath) => filePath === fullSlug || filePath === fullSlugWithIndexEnding
  );

  const menu: Menu[] = filePaths.map((filePath) => {
    const { meta } = getFileContent(filePath);
    const href = getHref(filePath);
    return {
      href,
      title: meta.title,
    };
  });

  const { meta, content } = getFileContent(filePath);

  const mdxSource = await renderToString(content, {
    components: {},
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: meta,
  });

  return {
    props: {
      meta,
      mdx: mdxSource,
      path: filePath,
    },
    revalidate: 1,
  };
};

export default Docs;
