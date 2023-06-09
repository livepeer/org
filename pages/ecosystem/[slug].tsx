import Layout from "components/layouts/page";
import { Container, Button, Link as A } from "@theme-ui/components";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import fs from "fs/promises";
import path from "path";
import { FiArrowUpRight } from "react-icons/fi";
import matter from "gray-matter";
import { HeadProps } from "components/primitives/head";

const components = {
  A,
  Button,
  FiArrowUpRight,
};

export default function Page({ source, frontMatter }) {
  const content = hydrate(source, { components });

  const headProps: HeadProps = {
    meta: {
      title: frontMatter?.title ? frontMatter?.title : null,
      description: frontMatter?.description ? frontMatter?.description : null,
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  return (
    <Layout headProps={headProps}>
      <Container className="markdown-body" sx={{ maxWidth: 960, mt: 24 }}>
        {content}
      </Container>
    </Layout>
  );
}

export async function getStaticPaths() {
  const mdxDirectory = path.join(process.cwd(), "markdown"); // Path to your MDX files directory
  const filenames = await fs.readdir(mdxDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx?$/, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {
  const slug = params.slug;
  const mdxFilePath = path.join(process.cwd(), `markdown/${slug}.mdx`); // Path to the specific MDX file
  const source = await fs.readFile(mdxFilePath, "utf8");
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, { components, scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
