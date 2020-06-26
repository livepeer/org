import { Box, Container, NavLink, Flex } from "theme-ui"
import LivepeerLogo from "components/icons/livepeer-logo"
import { useEffect, useCallback, useState } from "react"

const Nav = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

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
          justifyContent: "space-between"
        }}
      >
        <LivepeerLogo />
        <Flex
          sx={{
            "a:not(:last-of-type)": {
              mr: 5
            }
          }}
        >
          <NavLink>Participants</NavLink>
          <NavLink>Developers</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Enterprise</NavLink>
        </Flex>
      </Container>
    </Box>
  )
}

export default Nav
