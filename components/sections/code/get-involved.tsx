/** @jsx jsx */
import { jsx, Box, Text, Heading, Link as A, SxStyleProp, Grid } from "theme-ui"
import {
  FiGithub,
  FiCode,
  FiBook,
  FiMessageCircle,
  FiPlay
} from "react-icons/fi"

const linkSx: SxStyleProp = {
  color: "primary",
  fontWeight: 600
}

const links = [
  {
    icon: <FiCode />,
    label: (
      <>
        Read the <A sx={linkSx}>Livepeer.js</A> contributor guidelines.
      </>
    )
  },
  {
    icon: <FiGithub />,
    label: (
      <>
        Look for “good first issues” in <A sx={linkSx}>Livepeer.js</A>{" "}
        (Javascript), <A sx={linkSx}>LPMS</A> (video development in C or Go), or{" "}
        <A sx={linkSx}>Go-Livepeer</A> (go).
      </>
    )
  },
  {
    icon: <FiBook />,
    label: (
      <>
        View the <A sx={linkSx}>Grant Proposals</A> to see application concepts
        with some funding attached.
      </>
    )
  },
  {
    icon: <FiMessageCircle />,
    label: (
      <>
        Chat with the development team in <A sx={linkSx}>Discord</A> - we’re a
        welcoming bunch, so don’t be shy. Ask how you can get involved.
      </>
    )
  },
  {
    icon: <FiPlay />,
    label: (
      <>
        Looking to build a video application using Livepeer? Check out our{" "}
        <A sx={linkSx}>open developer docs</A> or{" "}
        <A sx={linkSx}>enterprise hosted services</A>.
      </>
    )
  }
]

const GetInvolvedSection = () => (
  <Box sx={{ bg: "text", color: "background" }}>
    <Grid
      variant="layout.section"
      gap={5}
      columns={[1, null, 2]}
      sx={{ pt: "160px" }}
    >
      <Box>
        <Text
          variant="section.titleLabel"
          sx={{ textAlign: ["center", null, "left"] }}
        >
          Collaborate
        </Text>
        <Heading
          variant="section.title"
          sx={{ textAlign: ["center", null, "left"] }}
        >
          Get involved
        </Heading>
        <Heading
          variant="section.subtitle"
          sx={{ textAlign: ["center", null, "left"], color: "lightGray" }}
        >
          There are many opportunities to collaborate with others in the
          Livepeer ecosystem on code both on the video side, and on the
          blockchain side.
        </Heading>
      </Box>
      <Box
        sx={{
          ".link:not(:last-of-type)": {
            mb: "40px"
          }
        }}
      >
        {links.map((link, i) => (
          <Box
            className="link"
            key={`get-involved-link-${i}`}
            sx={{ display: "flex" }}
          >
            <i
              sx={{
                color: "primary",
                fontSize: 5,
                width: "24px",
                height: "24px",
                mr: 4,
                variant: "layout.flexCenter"
              }}
            >
              {link.icon}
            </i>
            <Text variant="normal">{link.label}</Text>
          </Box>
        ))}
      </Box>
    </Grid>
  </Box>
)

export default GetInvolvedSection
