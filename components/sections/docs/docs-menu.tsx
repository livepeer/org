/** @jsx jsx */

import { jsx, useColorMode } from "theme-ui";
import Link from "next/link";
import Collapsible from "react-collapsible";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";

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
  path: string;
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
  const router = useRouter();

  const handlePushRoute = useCallback(() => {
    if (!href) return;
    router.push(href);
  }, [href, router]);

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
        onClick={handlePushRoute}
        sx={{
          fontSize: "14px",
          lineHeight: "24px",
          mr: "8px",
          transition: "all 0.2s",
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
          transition: "all 0.3s",
        }}>
        <TriggerIcon selected={selected} hover={hover} />
      </i>
    </div>
  );
};

const Section = ({
  title,
  links,
  selected,
  sectionOpen,
  setSectionOpen,
  path,
}: Menu & SectionsMenu) => {
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
        {links.map((link, idx) =>
          link.links.length > 0 ? (
            <Collapsible
              open={sectionOpen === link.href || link.href === `${path}/`}
              key={idx}
              handleTriggerClick={() => {
                sectionOpen === link.href
                  ? setSectionOpen("")
                  : setSectionOpen(link.href);
              }}
              trigger={
                <Trigger
                  selected={link.href === `${path}/`}
                  title={link.title}
                  href={link.href}
                  isOpen={sectionOpen === link.href || link.href === `${path}/`}
                />
              }
              transitionTime={300}
              sx={{
                color: `${path}/` === link.href ? "docs.selected" : "docs.text",
                transition: "all 0.2s",
                mt: "12px",
                cursor: "pointer",
                fontSize: "14px",
                lineHeight: "24px",
              }}>
              {link.links?.map((secondLink, idx) =>
                secondLink.links?.length > 0 ? (
                  <Collapsible
                    key={idx}
                    open={selected === link.href ? true : false}
                    trigger={
                      <Trigger
                        selected={secondLink.href === `${path}/`}
                        title={secondLink.title}
                      />
                    }
                    transitionTime={300}
                    sx={{
                      color:
                        `${path}/` === secondLink.href
                          ? "docs.selected"
                          : "docs.text",
                      mt: "12px",
                      transition: "all 0.2s",
                      cursor: "pointer",
                      fontSize: "14px",
                      lineHeight: "24px",
                    }}>
                    {secondLink.links &&
                      secondLink.links.map((thirdLink, idx) => (
                        <Link href={thirdLink.href} key={idx}>
                          <div
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mt: "12px",
                            }}>
                            {`${path}/` === `/docs/${thirdLink.href}` && (
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
                            <a
                              sx={{
                                color:
                                  `${path}/` === `/docs/${thirdLink.href}`
                                    ? "docs.selected"
                                    : "docs.text",
                                fontWeight:
                                  `${path}/` === `/docs/${thirdLink.href}`
                                    ? "600"
                                    : "normal",
                                transition: "all 0.2s",
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
                      ))}
                  </Collapsible>
                ) : (
                  <Link href={secondLink.href} key={idx}>
                    <div
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        mt: "12px",
                      }}>
                      {`${path}/` === `/docs/${secondLink.href}` && (
                        <div
                          sx={{
                            minWidth: "6px",
                            minHeight: "6px",
                            backgroundColor: "docs.selected",
                            transition: "all 0.2s",
                            mr: "10px",
                            mt: "9px",
                          }}
                        />
                      )}
                      <a
                        sx={{
                          color:
                            `${path}/` === `/docs/${secondLink.href}`
                              ? "docs.selected"
                              : "docs.text",
                          fontWeight:
                            `${path}/` === `/docs/${secondLink.href}`
                              ? "600"
                              : "normal",
                          transition: "all 0.2s",
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
                )
              )}
            </Collapsible>
          ) : (
            <Link href={link.href} key={idx}>
              <div sx={{ display: "flex", alignItems: "center", mt: "12px" }}>
                {`${path}/` === link.href && (
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
                <a
                  sx={{
                    color:
                      `${path}/` === link.href ? "docs.selected" : "docs.text",
                    transition: "all 0.2s",
                    cursor: "pointer",
                    maxWidth: "fit-content",
                    fontSize: "14px",
                    fontWeight: `${path}/` === link.href ? "600" : "normal",
                    lineHeight: "24px",
                    ":hover": {
                      color: "docs.selected",
                    },
                  }}>
                  {link.title}
                </a>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

const DocsMenu = ({ selected, menu, path }: Props) => {
  const [sectionOpen, setSectionOpen] = useState("");
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column",
        mr: [null, null, "40px", "10px"],
      }}>
      <div sx={{ display: "flex", alignItems: "center" }}>
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
        <Link href="/docs">
          <a
            sx={{
              fontSize: "14px",
              lineHeight: "24px",
              color: selected === "docs" ? "docs.selected" : "docs.text",
              fontWeight: selected === "docs" ? "600" : "normal",
              transition: "all 0.2s",
              cursor: "pointer",
            }}>
            Introduction
          </a>
        </Link>
      </div>
      {menu
        ?.filter((each) => each.title !== "index" && each.title !== "index.mdx")
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
