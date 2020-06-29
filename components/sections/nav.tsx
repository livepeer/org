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
    href: "/"
  },
  {
    label: "Developers",
    href: "/"
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

const Nav = () => {
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
        bg: "muted",
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
        <LivepeerLogo />
        <Box
          sx={{
            "a:not(:last-of-type)": { mr: 5 },
            display: ["none", "flex"]
          }}
        >
          {links.map((link) => (
            <NavLink key={`desktop-nav-link-${link.label}`}>
              {link.label}
            </NavLink>
          ))}
        </Box>
        <IconButton
          sx={{
            display: ["block", "none"],
            fontSize: 6,
            color: "text"
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
          bg: "background",
          color: "text",
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
          <LivepeerLogo />
          <IconButton
            sx={{
              display: ["block", "none"],
              fontSize: 6,
              color: "text"
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
                    fontSize: 6,
                    fontWeight: 600
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
