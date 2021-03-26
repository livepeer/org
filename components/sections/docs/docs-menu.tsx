/** @jsx jsx */

import { jsx, useColorMode } from "theme-ui";
import Link from "next/link";
import Collapsible from "react-collapsible";
import { useState } from "react";
import { useRouter } from "next/router";
import { isInRoute } from "lib/router-utils";

export type Menu = {
  selected?: string;
  title: string;
  href?: string;
  links?: Menu[];
};

type SectionsMenu = {
  path?: string;
  sectionOpen?: string;
  setSectionOpen?: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  selected?: string;
  menu: Menu[];
};

type TriggerProps = {
  title?: string;
  selected?: boolean;
  hover?: boolean;
  isOpen?: boolean;
  href?: string;
};

const TriggerIcon = ({ selected, hover }: TriggerProps) => {
  const [colorMode] = useColorMode();
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 5.25L7 8.75L10.5 5.25"
        stroke={
          selected && colorMode === "default"
            ? "#3F3FE2"
            : hover && colorMode === "default"
            ? "#3F3FE2"
            : selected && colorMode === "dark"
            ? "#00EB88"
            : hover && colorMode === "dark"
            ? "#00EB88"
            : colorMode === "default"
            ? "#131418"
            : "#ffffff"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Trigger = ({ title, selected, isOpen, href }: TriggerProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        color: "docs.text",
        ":hover": { color: "docs.selected" },
      }}>
      {selected && (
        <div
          sx={{
            width: "6px",
            height: "6px",
            backgroundColor: "docs.selected",
            transition: "all 0.2s",
            mr: "10px",
          }}
        />
      )}
      <p
        data-href={href}
        sx={{
          fontSize: "14px",
          lineHeight: "24px",
          mr: "8px",
          fontWeight: selected ? "600" : "normal",
          color: selected ? "docs.selected" : "docs.text",
          ":hover": {
            color: "docs.selected",
          },
        }}>
        {title}
      </p>
      <i
        sx={{
          transform: isOpen ? "rotate(180deg)" : "",
          // transition: "all 0.3s",
        }}>
        <TriggerIcon selected={selected} hover={hover} />
      </i>
    </div>
  );
};

function cleanupHrefForComparison(href: string) {
  if (href.startsWith("/docs")) return href;
  if (href.startsWith("docs")) return "/" + href;
  if (href.startsWith("/")) return "/docs" + href;
  return "/docs/" + href;
}

const Section = ({
  title,
  links,
  selected,
  sectionOpen,
  setSectionOpen,
  path,
}: Menu & SectionsMenu) => {
  const router = useRouter();

  return (
    <div>
      <p
        sx={{
          fontSize: "12px",
          lineHeight: "24px",
          mt: "40px",
          mb: "12px",
          textTransform: "uppercase",
          color: "#A5A5A5",
          fontWeight: "600",
        }}>
        {title}
      </p>
      <div
        sx={{ display: "flex", flexDirection: "column", color: "docs.text" }}>
        {links.map((link, idx) => {
          const isHere = isInRoute(
            router.asPath,
            cleanupHrefForComparison(link.href)
          );

          return link.links.length > 0 ? (
            <Collapsible
              open={
                sectionOpen === link.href ||
                isHere ||
                link.links?.filter((child) => `/docs/${child.href}` === path)
                  .length > 0
              }
              key={idx}
              handleTriggerClick={() => {
                sectionOpen === link.href
                  ? setSectionOpen("")
                  : sectionOpen === link.href &&
                    link.links?.filter(
                      (child) => `/docs/${child.href}` === path
                    ).length > 0
                  ? null
                  : setSectionOpen(link.href);
              }}
              trigger={
                <Trigger
                  selected={isHere}
                  title={link.title}
                  href={link.href}
                  isOpen={
                    sectionOpen === link.href ||
                    isHere ||
                    link.links?.filter(
                      (child) => `/docs/${child.href}` === path
                    ).length > 0
                  }
                />
              }
              transitionTime={5}
              sx={{
                color: path === link.href ? "docs.selected" : "docs.text",
                // transition: "all 0.2s",
                mt: "12px",
                cursor: "pointer",
                fontSize: "14px",
                lineHeight: "24px",
              }}>
              {link.links?.map((secondLink, idx) => {
                const isHereSecondLink = isInRoute(
                  router.asPath,
                  cleanupHrefForComparison(secondLink.href)
                );
                return secondLink.links?.length > 0 ? (
                  <Collapsible
                    key={idx}
                    open={selected === link.href ? true : false}
                    trigger={
                      <Trigger
                        selected={isHereSecondLink}
                        title={secondLink.title}
                      />
                    }
                    transitionTime={5}
                    sx={{
                      color: isHereSecondLink ? "docs.selected" : "docs.text",
                      mt: "12px",
                      cursor: "pointer",
                      fontSize: "14px",
                      lineHeight: "24px",
                    }}>
                    {secondLink.links &&
                      secondLink.links.map((thirdLink, idx) => {
                        const isHereThirdLink = isInRoute(
                          router.asPath,
                          cleanupHrefForComparison(thirdLink.href)
                        );
                        return (
                          <Link href={thirdLink.href} key={idx}>
                            <div
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                mt: "12px",
                              }}>
                              {isHereThirdLink && (
                                <div
                                  sx={{
                                    width: "6px",
                                    height: "6px",
                                    backgroundColor: "docs.selected",
                                    mr: "10px",
                                  }}
                                />
                              )}
                              <a
                                sx={{
                                  color: isHereThirdLink
                                    ? "docs.selected"
                                    : "docs.text",
                                  fontWeight: isHereThirdLink
                                    ? "600"
                                    : "normal",
                                  cursor: "pointer",
                                  maxWidth: "fit-content",
                                  fontSize: "14px",
                                  lineHeight: "24px",
                                  ":hover": {
                                    color: "docs.selected",
                                  },
                                }}>
                                {thirdLink.title}
                              </a>
                            </div>
                          </Link>
                        );
                      })}
                  </Collapsible>
                ) : (
                  <Link href={secondLink.href} key={idx}>
                    <div
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: "12px",
                      }}>
                      {isHereSecondLink && (
                        <div
                          sx={{
                            minWidth: "6px",
                            minHeight: "6px",
                            backgroundColor: "docs.selected",
                            mr: "10px",
                          }}
                        />
                      )}
                      <a
                        sx={{
                          color: isHereSecondLink
                            ? "docs.selected"
                            : "docs.text",
                          fontWeight: isHereSecondLink ? "600" : "normal",
                          cursor: "pointer",
                          maxWidth: "fit-content",
                          fontSize: "14px",
                          lineHeight: "24px",
                          ":hover": {
                            color: "docs.selected",
                          },
                        }}>
                        {secondLink.title}
                      </a>
                    </div>
                  </Link>
                );
              })}
            </Collapsible>
          ) : (
            <Link href={link.href} key={idx}>
              <div
                sx={{ display: "flex", alignItems: "center", mt: "12px" }}
                onClick={() => setSectionOpen("")}>
                {isHere && (
                  <div
                    sx={{
                      width: "6px",
                      height: "6px",
                      backgroundColor: "docs.selected",
                      mr: "10px",
                    }}
                  />
                )}
                <a
                  sx={{
                    color: isHere ? "docs.selected" : "docs.text",
                    cursor: "pointer",
                    maxWidth: "fit-content",
                    fontSize: "14px",
                    fontWeight: isHere ? "600" : "normal",
                    lineHeight: "24px",
                    ":hover": {
                      color: "docs.selected",
                    },
                  }}>
                  {link.title}
                </a>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const DocsMenu = ({ selected, menu }: Props) => {
  const [sectionOpen, setSectionOpen] = useState("");

  const router = useRouter();
  const path = router.asPath;

  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        mr: [null, null, "40px", "10px"],
        width: "100%",
      }}>
      {menu
        .filter(
          (section) =>
            section.href === "/docs/index.mdx" || section.href === "/docs/index"
        )
        .map((intro, i) => (
          <div key={i} sx={{ display: "flex", alignItems: "center" }}>
            {selected === "docs" && (
              <div
                sx={{
                  width: "6px",
                  height: "6px",
                  transition: "all 0.2s",
                  backgroundColor: "docs.selected",
                  mr: "10px",
                }}
              />
            )}
            <Link href={intro.href.replace("index.mdx", "")}>
              <a
                sx={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: selected === "docs" ? "docs.selected" : "docs.text",
                  fontWeight: selected === "docs" ? "600" : "normal",
                  transition: "all 0.2s",
                  cursor: "pointer",
                }}>
                {intro.title}
              </a>
            </Link>
          </div>
        ))}
      {menu
        ?.filter(
          (each) =>
            each.href !== "/docs/index" && each.href !== "/docs/index.mdx"
        )
        .map((section, idx) => (
          <Section
            selected={selected}
            path={path}
            key={idx}
            title={section.title}
            links={section.links}
            sectionOpen={sectionOpen}
            setSectionOpen={setSectionOpen}
          />
        ))}
    </div>
  );
};

export default DocsMenu;
