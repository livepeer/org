import {
  Box,
  Container,
  NavLink,
  Link as A,
  IconButton,
  Flex,
  Button,
  Text
} from "theme-ui"
import LivepeerLogo from "components/icons/livepeer-logo"
import { useEffect, useCallback, useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import Link from "next/link"

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
    href: "/"
  },
  {
    label: "Enterprise",
    href: "/"
  }
]

const navHeight = "72px"

const Nav = ({ isDark = false }) => {
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

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: "header",
        bg: isDark ? "black" : "muted",
        color: isDark ? "background" : "text",
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
          {links.map((link) => (
            <Link
              key={`desktop-nav-link-${link.label}`}
              href={link.href}
              as={link.asPath}
              passHref
            >
              <NavLink
                sx={{
                  color: isDark ? "background" : "text",
                  "&:hover": {
                    color: isDark ? "primary" : "secondary"
                  }
                }}
              >
                {link.label}
              </NavLink>
            </Link>
          ))}
        </Box>
        <IconButton
          sx={{
            display: ["block", "none"],
            fontSize: 6,
            color: isDark ? "background" : "text"
          }}
          onClick={() => setMobileMenuIsOpen(true)}
        >
          <FiMenu size="24px" />
        </IconButton>
      </Container>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          height: mobileMenuIsOpen ? "100vh" : 0,
          transition: "height .2s",
          overflow: "hidden",
          bg: isDark ? "black" : "background",
          color: isDark ? "background" : "text",
          width: "100%",
          zIndex: "dropdown"
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
              display: ["block", "none"],
              fontSize: 6,
              color: isDark ? "background" : "text"
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
            {links.map((link) => (
              <Link
                key={`link-${link.label}-${link.href}`}
                href={link.href}
                passHref
              >
                <A
                  sx={{
                    textAlign: "center",
                    fontSize: 7,
                    fontWeight: 600,
                    color: isDark ? "background" : "text"
                  }}
                >
                  {link.label}
                </A>
              </Link>
            ))}
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
  )
}

export default Nav
