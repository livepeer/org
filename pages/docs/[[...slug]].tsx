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
import DocsCard, { Icon, IconMine } from "components/sections/docs/docs-card";
import { Heading } from "components/sections/docs/docs-content";
import { jsx, ThemeProvider, useColorMode, Box } from "theme-ui";
import DocsCardsContainer from "components/sections/docs/docs-cards-container";
import DocsMenu, { Menu } from "components/sections/docs/docs-menu";
import Pagination from "components/sections/docs/pagination";
import { docsPositions } from "docs-positions";
import { useRouter } from "next/router";
import DocsPageLayout from "components/layouts/docs-page";
import getToc from "markdown-toc";
import Link from "next/link";
import theme from "lib/theme";
import Markdown from "components/primitives/markdown";

type Params = { slug?: string[] };

const components = {
  h1: ({ children }) => {
    return <Heading as="h1">{children}</Heading>;
  },
  h2: ({ children }) => {
    return <Heading as="h2">{children}</Heading>;
  },
  h3: ({ children }) => {
    return <Heading as="h3">{children}</Heading>;
  },

  a: ({ children, href }) => {
    return (
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
    );
  },
  Box,
  DocsCard,
  DocsCardsContainer,
  Icon,
  Pagination,
  IconMine,
};

const Docs = ({
  mdx,
  meta,
  path,
  menu,
  toc,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const rightSideBar = toc.filter(
    (title) => title.lvl === 2 || title.lvl === 3
  );

  const [colorMode, setColorMode] = useColorMode();

  const slug = path ? path : "";

  const realSlug = slug.replace("/index.mdx", "");

  const content = hydrate(mdx, {
    components,
  });

  const topLevel = slug.split("/").slice(1, -1);

  return (
    <DocsPageLayout
      headProps={{
        meta: {
          title: meta.title,
          description: meta.description,
          url: `https://livepeer.org${router.asPath}`,
        },
      }}>
      <div
        sx={{
          maxWidth: "100vw",
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
          menu={menu}
        />
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            px: ["24px", "24px", "24px", "32px"],
            mt: "60px",
          }}>
          <div
            sx={{
              display: ["none", "none", "flex"],
              position: "sticky",
              height: "calc(100vh - 118px)",
              top: "118px",
              overflowY: "auto",
              minWidth: "250px",
            }}>
            <DocsMenu selected={realSlug} menu={menu} />
          </div>
          <div
            sx={{
              width: "100%",
              maxWidth: ["100%", "100%", "730px"],
              minHeight: "calc(100vh - 118px)",
              color: "docs.text",
              display: "flex",
              flexDirection: "column",
            }}>
            <div sx={{ display: "flex" }}>
              {topLevel.map((each, idx) => (
                <>
                  <p
                    key={idx}
                    sx={{
                      color: "docs.text",
                      fontSize: "14px",
                      fontWeight: "400",
                      textTransform: "capitalize",
                    }}>
                    {each.replace(/-/g, " ")}
                  </p>
                  {idx !== topLevel?.length - 1 && (
                    <span
                      sx={{ mx: "5px", fontWeight: "500", fontSize: "14px" }}>
                      /
                    </span>
                  )}
                </>
              ))}
            </div>
            <Markdown>{content}</Markdown>
          </div>
          <div
            sx={{
              position: "sticky",
              height: "calc(100vh - 118px)",
              top: "118px",
              minWidth: "200px",
              display: ["none", "none", "none", "flex"],
              flexDirection: "column",
              overflowY: "auto",
              ml: "20px",
            }}>
            {rightSideBar.map((title, idx) => (
              <Link
                href={`${router.asPath.split("#")[0]}#${title.slug}`}
                passHref
                key={idx}>
                <a
                  sx={{
                    mt: "8px",
                    fontSize: 14,
                    color: "docs.gray",
                    cursor: "pointer",
                    ml: title.lvl === 2 ? "0" : "24px",
                    ":hover": {
                      textDecoration: "underline",
                    },
                    ":first-of-type": {
                      mt: "0",
                    },
                  }}>
                  {title.content}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DocsPageLayout>
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
  description: z.string().optional(),
});

function getFileContent(filePath: string) {
  const source = fs.readFileSync(path.join(process.cwd(), filePath));
  const { content, data } = matter(source);
  const parsedData = dataSchema?.parse(data);
  return { content, meta: parsedData };
}

function splitHref(value) {
  return value.href?.split("/");
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
  const sorted = filePaths.sort((a, b) => {
    const indexA = docsPositions.indexOf(a);
    const indexB = docsPositions.indexOf(b);
    return indexA - indexB;
  });

  const paths = sorted.map((path) => {
    const { meta } = getFileContent(path);
    return {
      path: path
        .split("/")
        .splice(1, 1)
        .filter((each) => each !== "index.mdx" || "index")
        .toString(),
      title: meta.title,
    };
  });

  const routePaths = [...Array.from(new Set(paths.map((item) => item.path)))];

  const menu: Menu[] = sorted.map((filePath) => {
    const { meta } = getFileContent(filePath);
    const href = getHref(filePath);
    return {
      href,
      title: meta.title,
    };
  });

  const realMenu: Menu[] = routePaths.map((route) => {
    const metaSlug =
      route === "index.mdx" ? `docs/${route}` : `docs/${route}/index.mdx`;
    const { meta } = getFileContent(metaSlug);
    return {
      href: `/docs/${route}`,
      title: meta.title,
      links: menu
        .filter(
          (subPath) =>
            splitHref(subPath).splice(0, 1)[0] === route &&
            splitHref(subPath).filter((each) => each !== "").length < 3 &&
            subPath.href.replace("/", "") !== route
        )
        .map((secondLink) => {
          return {
            href: `/docs/${secondLink.href}`,
            title: secondLink.title,
            links: menu.filter(
              (thirdLink) =>
                splitHref(thirdLink).filter((each) => each !== "").length >=
                  3 &&
                splitHref(thirdLink).splice(0, 1)[0] ===
                  splitHref(secondLink).splice(0, 1)[0] &&
                splitHref(thirdLink).splice(1, 2)[0] ===
                  splitHref(secondLink).splice(1, 2)[0]
            ),
          };
        }),
    };
  });

  const { meta, content } = getFileContent(filePath);

  const toc = getToc(content).json;

  const mdxSource = await renderToString(content, {
    components,
    provider: {
      component: ThemeProvider,
      props: { theme },
    },
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
      menu: realMenu,
      toc,
    },
    revalidate: 1,
  };
};

export default Docs;
