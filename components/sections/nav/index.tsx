/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  NavLink,
  Link as A,
  IconButton,
  Flex,
  Button,
  Text,
} from "theme-ui";
import LivepeerLogo from "components/svgs/livepeer-logo";
import { useEffect, useCallback, useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import TopNotification, { TopNotificationProps } from "./top-notification";
import Menu from "components/sections/primer/Menu";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LanguageDropdown from "components/primitives/language-dropdown";
import EcosystemDropdown from "components/primitives/ecosystem-dropdown";
import NetworkDropdown from "components/primitives/network-dropdown";
import DeveloperDropdown from "components/primitives/developer-dropdown";

type LinkType = {
  label: string;
  href: string;
  isExternal?: boolean;
  asPath?: string;
};

const navHeight = "72px";

export type NavProps = {
  isInmersive?: boolean;
  isPrimer?: boolean;
  background?: "muted" | "dark" | "white" | "black" | "translucent";
};

const Nav = ({ background, isInmersive, isPrimer = false }: NavProps) => {
  const { t } = useTranslation(["common"]);
  const router = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    if (scrollTop > 0) setHasScrolled(true);
    else setHasScrolled(false);
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const topNotification: TopNotificationProps = {
    title: "Introducing Livepeer.js - the Livepeer Development Kit",
    link: {
      label: "Build with Livepeer.js",
      href: "https://docs.livepeer.org/reference/livepeer-js",
      isExternal: true,
    },
  };

  const links: LinkType[] = [
    {
      label: t("nav-about"),
      href: "/about",
    },
  ];

  const isDark = background === "black" || background === "dark";
  let bg: string;
  let color: string;
  switch (background) {
    default:
    case "white":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "background";
      color = "text";
      break;
    case "muted":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : isPrimer
          ? "rgba(255, 255, 255, .6)"
          : "muted";
      color = "text";
      break;
    case "dark":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "text";
      color = "background";
      break;
    case "black":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "black";
      color = "background";
      break;
    case "translucent":
      bg =
        isInmersive && !hasScrolled && !mobileMenuIsOpen
          ? "transparent"
          : "rgba(255, 255, 255, .5)";
      color = "text";
      break;
  }

  return (
    <>
      {topNotification && <TopNotification {...topNotification} />}
      <Box
        sx={{
          bg,
          color,
          position: "sticky",
          top: 0,
          width: "100%",
          zIndex: "header",
          transition: "box-shadow .3s, top .3s",
          boxShadow: hasScrolled ? "magical" : "none",
          backdropFilter:
            isPrimer && hasScrolled ? "saturate(180%) blur(5px)" : "none",
        }}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: navHeight,
            maxWidth: 1350,
          }}>
          <LivepeerLogo
            isDark={isDark}
            disableHover={isPrimer ? true : false}
          />
          <Box
            sx={{
              alignItems: "center",
              ".nav-link": {
                fontSize: 15,
              },
              ".nav-link:not(:last-child)": { mr: 36 },
              display: [isPrimer ? "null" : "none", null, "flex"],
            }}>
            {!isPrimer &&
              links.map((link) =>
                link.isExternal ? (
                  <NavLink
                    className="nav-link"
                    key={`desktop-nav-link-${link.label}`}
                    href={link.href}
                    data-dark={isDark}
                    target="_blank">
                    {link.label}
                  </NavLink>
                ) : (
                  <Link
                    key={`desktop-nav-link-${link.label}`}
                    href={link.href}
                    as={link.asPath}
                    passHref>
                    <NavLink className="nav-link" data-dark={isDark}>
                      {link.label}
                    </NavLink>
                  </Link>
                )
              )}
            {!isPrimer && (
              <NavLink className="nav-link" as={Box} data-dark={isDark}>
                <DeveloperDropdown />
              </NavLink>
            )}
            {!isPrimer && (
              <NavLink className="nav-link" as={Box} data-dark={isDark}>
                <NetworkDropdown />
              </NavLink>
            )}
            {/* {!isPrimer && (
              <NavLink className="nav-link" as={Box} data-dark={isDark}>
                <EcosystemDropdown />
              </NavLink>
            )} */}
            <Link
              key={`desktop-nav-link-ecosyste`}
              href="/ecosystem"
              as="/ecosystem"
              passHref>
              <NavLink className="nav-link" data-dark={isDark}>
                Ecosystem
              </NavLink>
            </Link>
            {!isPrimer && (
              <NavLink className="nav-link" as={Box} data-dark={isDark}>
                <LanguageDropdown />
              </NavLink>
            )}
            {!isPrimer && (
              <NavLink className="nav-link" as={Box} data-dark={isDark}>
                <A
                  variant="buttons.neutral"
                  href="https://livepeer.studio"
                  target="_blank">
                  Open Studio
                  <i sx={{ ml: 1, fontSize: 4 }}>
                    <FiArrowUpRight />
                  </i>
                </A>
              </NavLink>
            )}
            {isPrimer && (
              <Box
                sx={{
                  top: [hasScrolled ? 12 : 48, 0],
                  right: [16, 0],
                  position: ["fixed", "initial"],
                  pointerEvents: "none",
                }}>
                <Menu />
              </Box>
            )}
          </Box>
          {!isPrimer && (
            <IconButton
              sx={{
                color,
                display: ["block", "block", "none"],
                fontSize: 6,
              }}
              onClick={() => setMobileMenuIsOpen(true)}>
              <FiMenu size="24px" />
            </IconButton>
          )}
        </Container>
        <Box
          sx={{
            bg,
            color,
            position: "fixed",
            top: 0,
            height: mobileMenuIsOpen ? "100vh" : 0,
            transition: "height .2s",
            overflow: "hidden",
            width: "100%",
            zIndex: "dropdown",
            visibility: mobileMenuIsOpen ? "visible" : "hidden",
          }}>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: navHeight,
            }}>
            <LivepeerLogo isDark={isDark} />
            <Flex sx={{ alignItems: "center" }}>
              <NavLink
                sx={{
                  mr: 3,
                  pr: 20,
                  borderRight: "1px solid",
                  borderColor: "ultraLightGray",
                }}
                className="nav-link"
                as={Box}
                data-dark={isDark}>
                <LanguageDropdown />
              </NavLink>
              <IconButton
                sx={{ color, fontSize: 6 }}
                onClick={() => setMobileMenuIsOpen(false)}>
                <FiX size="24px" />
              </IconButton>
            </Flex>
          </Container>
          <Container
            sx={{
              pb: 4,
              pt: "10vh",
              "a:not(:last-of-type)": { mb: 2 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: `calc(100vh - ${navHeight})`,
            }}>
            <Flex sx={{ flexDirection: "column" }}>
              <Link href="/about" passHref>
                <A
                  sx={{
                    color,
                    textAlign: "center",
                    fontSize: 6,
                    fontWeight: 600,
                  }}>
                  About
                </A>
              </Link>
              <Link href="/about" passHref>
                <A
                  sx={{
                    color,
                    textAlign: "center",
                    fontSize: 6,
                    fontWeight: 600,
                  }}>
                  Developers
                </A>
              </Link>
              <Link href="/orchestrators" passHref>
                <A
                  sx={{
                    color,
                    textAlign: "center",
                    fontSize: 6,
                    fontWeight: 600,
                  }}>
                  Orchestrators
                </A>
              </Link>
              <Link href="/delegators" passHref>
                <A
                  sx={{
                    color,
                    textAlign: "center",
                    fontSize: 6,
                    fontWeight: 600,
                  }}>
                  Delegators
                </A>
              </Link>
            </Flex>

            <Flex sx={{ flexDirection: "column" }}>
              <Button
                sx={{ mb: 3 }}
                onClick={() => {
                  setMobileMenuIsOpen(false);
                  router.push("/#start-building");
                }}>
                {t("nav-start-building")}
              </Button>
              <Text sx={{ fontSize: "14px", textAlign: "center" }}>
                © Livepeer, Inc. {new Date().getFullYear()}
              </Text>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Nav;
