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
  Text
} from "theme-ui"
import LivepeerLogo from "components/svgs/livepeer-logo"
import { useEffect, useCallback, useState } from "react"
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi"
import Link from "next/link"
import TopNotification, { TopNotificationProps } from "./top-notification"

type LinkType = {
  label: string
  href: string
  isExternal?: boolean
  asPath?: string
}

const links: LinkType[] = [
  {
    label: "Participants",
    href: "/participants"
  },
  {
    label: "Developers",
    href: "/developers"
  },
  {
    label: "Blog",
    href: "https://medium.com/livepeer-blog",
    isExternal: true
  },
  {
    label: "Enterprise",
    href: "https://livepeer.com",
    isExternal: true
  }
]

const navHeight = "72px"

const defaultTopNotification: TopNotificationProps = {
  title: "Livepeer Redesign",
  description: "Read about our latest improvements.",
  link: {
    label: "Read more",
    href: "/blog"
  }
}

export type NavProps = {
  background?: "muted" | "dark" | "white" | "black"
  topNotification?: TopNotificationProps
}

const Nav = ({
  background,
  topNotification = defaultTopNotification
}: NavProps) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement
    if (scrollTop > 0) setHasScrolled(true)
    else setHasScrolled(false)
  }, [])

  useEffect(() => {
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isDark = background === "black" || background === "dark"
  let bg: string
  let color: string
  switch (background) {
    default:
    case "white":
      bg = "background"
      color = "text"
      break
    case "muted":
      bg = "muted"
      color = "text"
      break
    case "dark":
      bg = "text"
      color = "background"
      break
    case "black":
      bg = "black"
      color = "background"
      break
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
          zIndex: "header",
          transition: "box-shadow .3s",
          boxShadow: hasScrolled ? "magical" : "none"
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: navHeight
          }}
        >
          <LivepeerLogo isDark={isDark} />
          <Box
            sx={{
              "a:not(:last-of-type)": { mr: 5 },
              display: ["none", "flex"]
            }}
          >
            {links.map((link) =>
              link.isExternal ? (
                <NavLink
                  key={`desktop-nav-link-${link.label}`}
                  href={link.href}
                  data-dark={isDark}
                  target="_blank"
                >
                  {link.label}
                </NavLink>
              ) : (
                <Link
                  key={`desktop-nav-link-${link.label}`}
                  href={link.href}
                  as={link.asPath}
                  passHref
                >
                  <NavLink data-dark={isDark}>{link.label}</NavLink>
                </Link>
              )
            )}
          </Box>
          <IconButton
            sx={{
              color,
              display: ["block", "none"],
              fontSize: 6
            }}
            onClick={() => setMobileMenuIsOpen(true)}
          >
            <FiMenu size="24px" />
          </IconButton>
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
            visibility: mobileMenuIsOpen ? "visible" : "hidden"
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: navHeight
            }}
          >
            <LivepeerLogo isDark={isDark} />
            <IconButton
              sx={{
                color,
                display: ["block", "none"],
                fontSize: 6
              }}
              onClick={() => setMobileMenuIsOpen(false)}
            >
              <FiX size="24px" />
            </IconButton>
          </Container>
          <Container
            sx={{
              pb: 4,
              pt: "10vh",
              "a:not(:last-of-type)": { mb: 2 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: `calc(100vh - ${navHeight})`
            }}
          >
            <Flex sx={{ flexDirection: "column" }}>
              {links.map((link) =>
                link.isExternal ? (
                  <A
                    key={`link-${link.label}-${link.href}`}
                    href={link.href}
                    target="_blank"
                    sx={{
                      color,
                      textAlign: "center",
                      fontSize: 7,
                      fontWeight: 600
                    }}
                  >
                    {link.label}
                  </A>
                ) : (
                  <Link
                    key={`link-${link.label}-${link.href}`}
                    href={link.href}
                    passHref
                  >
                    <A
                      sx={{
                        color,
                        textAlign: "center",
                        fontSize: 7,
                        fontWeight: 600
                      }}
                    >
                      {link.label}
                    </A>
                  </Link>
                )
              )}
            </Flex>

            <Flex sx={{ flexDirection: "column" }}>
              <Button sx={{ mb: 3 }}>Get started</Button>
              <Text sx={{ fontSize: "14px", textAlign: "center" }}>
                © Livepeer, Inc. 2020 - All rights reserved.
              </Text>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Nav
