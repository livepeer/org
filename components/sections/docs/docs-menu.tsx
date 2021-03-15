/** @jsx jsx */

import { jsx, useColorMode } from "theme-ui";
import Link from "next/link";
import Collapsible from "react-collapsible";
import { useState } from "react";

type Props = {
  selected?: string;
};

type TriggerProps = {
  title?: string;
  hover?: boolean;
  selected?: string;
};

type SectionProps = {
  title: string;
  selected: string;
  links?: {
    title: string;
    href: string;
    links: {
      title: string;
      href: string;
      links: {
        title: string;
        href: string;
      }[];
    }[];
  }[];
};

const sections = [
  {
    title: "Video Application Developers",
    links: [
      {
        title: "Overview",
        href: "/docs/video-application-developers/overview",
        links: [],
      },
      {
        title: "Getting Started",
        href: "/docs/video-application-developers/getting-started",
        links: [
          {
            title: "Installation",
            href:
              "/docs/video-application-developers/getting-started/installation",
            links: [],
          },
          {
            title: "Depositing funds for transcoding",
            href: "/",
            links: [],
          },
          {
            title: "Running Livepeer in broadcaster mode",
            href: "/",
            links: [],
          },
          {
            title: "Boradcasting to your Livepeer node using OBS",
            href: "/",
            links: [],
          },
          {
            title: "Playing the local video stream",
            href: "/",
            links: [],
          },
        ],
      },
      {
        title: "How-to Guides",
        href: "/",
        links: [],
      },
      {
        title: "Core Concepts",
        href: "/",
        links: [
          {
            title: "Benefits of using Livepeer",
            href: "/",
            links: [],
          },
          {
            title: "Use Cases",
            href: "/",
            links: [],
          },
        ],
      },
      {
        title: "Reference",
        href: "/",
        links: [],
      },
    ],
  },
  {
    title: "Video Miners",
    links: [
      {
        title: "Overview",
        href: "/docs/video-miners/overview",
        links: [],
      },
      {
        title: "Getting Started",
        href: "/docs/video-miners/getting-started",
        links: [
          {
            title: "Installation",
            href: "/docs/video-miners/getting-started/installation",
            links: [],
          },
          {
            title: "Depositing funds for transcoding",
            href: "/",
            links: [],
          },
          {
            title: "Running Livepeer in broadcaster mode",
            href: "/",
            links: [],
          },
          {
            title: "Boradcasting to your Livepeer node using OBS",
            href: "/",
            links: [],
          },
          {
            title: "Playing the local video stream",
            href: "/",
            links: [],
          },
        ],
      },
      {
        title: "How-to Guides",
        href: "/",
        links: [],
      },
      {
        title: "Core Concepts",
        href: "/",
        links: [],
      },
      {
        title: "Reference",
        href: "/",
        links: [],
      },
    ],
  },
  {
    title: "Protocol",
    links: [
      {
        title: "Core Concepts",
        href: "/",
        links: [],
      },
      {
        title: "Reference",
        href: "/",
        links: [],
      },
    ],
  },
];

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

const Trigger = ({ title, selected }: TriggerProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      }}
      onClick={() => setIsOpen(!isOpen)}>
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
        sx={{
          fontSize: "14px",
          lineHeight: "24px",
          mr: "8px",
          // color: selected ? "docs.selected" : "docs.text",
          transition: "all 0.2s",
          fontWeight: selected ? "600" : "normal",
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

const Section = ({ title, links, selected }: SectionProps) => {
  const [isOpen, setIsOpen] = useState("");
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
              open={
                selected === link.href
                  ? true
                  : isOpen !== link.href || isOpen !== ""
                  ? false
                  : false
              }
              key={idx}
              onOpen={() => setIsOpen(link.href)}
              onClose={() => setIsOpen("none")}
              trigger={
                <Trigger
                  selected={selected === link.href ? selected : ""}
                  title={link.title}
                />
              }
              transitionTime={300}
              sx={{
                color: selected === link.href ? "docs.select" : "docs.text",
                transition: "all 0.2s",
                mt: "12px",
                cursor: "pointer",
                fontSize: "14px",
                lineHeight: "24px",
              }}>
              {link.links?.map((secondLink, idx) =>
                secondLink.links.length > 0 ? (
                  <Collapsible
                    key={idx}
                    open={selected === link.href ? true : false}
                    trigger={
                      <Trigger
                        selected={selected === secondLink.href ? selected : ""}
                        title={secondLink.title}
                      />
                    }
                    transitionTime={300}
                    sx={{
                      color:
                        selected === secondLink.href
                          ? "docs.select"
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
                          <a
                            sx={{
                              color: "docs.text",
                              transition: "all 0.2s",
                              mt: "12px",
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
                        </Link>
                      ))}
                  </Collapsible>
                ) : (
                  <Link href={secondLink.href} key={idx}>
                    <a
                      sx={{
                        color: "docs.text",
                        transition: "all 0.2s",
                        mt: "12px",
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
                  </Link>
                )
              )}
            </Collapsible>
          ) : (
            <Link href={link.href} key={idx}>
              <a
                sx={{
                  color: "docs.text",
                  transition: "all 0.2s",
                  mt: "12px",
                  cursor: "pointer",
                  maxWidth: "fit-content",
                  fontSize: "14px",
                  lineHeight: "24px",
                  ":hover": {
                    color: "docs.selected",
                  },
                }}>
                {link.title}
              </a>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

const DocsMenu = ({ selected }: Props) => {
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
      {sections.map((section, idx) => (
        <Section
          selected={selected}
          key={idx}
          title={section.title}
          links={section.links}
        />
      ))}
    </div>
  );
};

export default DocsMenu;
