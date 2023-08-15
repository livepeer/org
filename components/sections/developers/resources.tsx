import { Container, Flex, Box, Link as A } from "theme-ui";
import { FiChevronRight, FiPhoneCall, FiBookOpen } from "react-icons/fi";
import { FaDiscord, FaGithub } from "react-icons/fa";

const resources = [
  {
    icon: <FaDiscord />,
    title: "Discord",
    description: "Support channel for developers",
    linkProps: {
      link: {
        href: "https://discord.gg/livepeer",
        isExternal: true,
      },
    },
  },
  {
    icon: <FiBookOpen />,
    title: "Docs",
    description: "Technical documentation for building with Livepeer Protocol",
    linkProps: {
      link: {
        href: "https://docs.livepeer.org",
        isExternal: true,
      },
    },
  },
  {
    icon: <FiPhoneCall />,
    title: "Developer call",
    description: "Bi-weekly calls for developers, open to everyone",
    linkProps: {
      link: {
        href:
          "https://calendar.google.com/calendar/u/0/r?cid=Y185MmQ3cnE5NmNlaDIxMDBkcTdnMWR1bHZrc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
        isExternal: true,
      },
    },
  },
  {
    icon: <FaGithub />,
    title: "Awesome Livepeer",
    description: "Community curated resources on Github",
    linkProps: {
      link: {
        href: "https://github.com/livepeer/awesome-livepeer",
        isExternal: true,
      },
    },
  },
];

export const Build = () => (
  <Box sx={{ backgroundColor: "muted" }}>
    <Container variant="section" sx={{ pt: 70, pb: 60 }}>
      {resources.map((resource) => {
        return (
          <A
            href={resource.linkProps.link.href}
            target="_blank"
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: 1000,
              mx: "auto",
              borderBottom: "1px solid #ccc",
              py: 3,
              px: 2,
              transition: ".2s",
              svg: { transform: "scale(1.2)" },
              "&:last-child": {
                borderBottom: 0,
              },
              "&:hover": {
                color: "initial",
                px: 3,
                transition: ".2s",
              },
            }}>
            <Box
              sx={{
                mr: 3,
                border: "1px solid #ccc",
                borderRadius: 10,
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 34,
              }}>
              {resource.icon}
            </Box>
            <Flex
              sx={{
                alignItems: ["flex-start", "center"],
                flexDirection: ["column", "row"],
              }}>
              <Box sx={{ fontWeight: "bold", mr: 2 }}>{resource.title}</Box>
              <Box>{resource.description}</Box>
            </Flex>
            <Box sx={{ ml: "auto" }}>
              <FiChevronRight />
            </Box>
          </A>
        );
      })}
    </Container>
  </Box>
);

export default Build;
