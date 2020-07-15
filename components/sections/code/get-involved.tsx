/** @jsx jsx */
import { jsx, Box, Text, Heading, Link as A, SxStyleProp, Grid } from "theme-ui"
import {
  FiGithub,
  FiCode,
  FiBook,
  FiMessageCircle,
  FiPlay
} from "react-icons/fi"
import ListItem, { ListItemProps } from "components/primitives/list-item"

const linkSx: SxStyleProp = {
  color: "primary",
  fontWeight: 600
}

const listItems: ListItemProps[] = [
  {
    icon: <FiCode />,
    children: (
      <>
        Read the{" "}
        <A
          href="https://github.com/livepeer/livepeerjs/blob/master/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          variant="coloured"
          data-dark
        >
          Livepeer.js
        </A>{" "}
        contributor guidelines.
      </>
    )
  },
  {
    icon: <FiGithub />,
    children: (
      <>
        Look for “good first issues” in{" "}
        <A
          href="https://github.com/livepeer/livepeerjs"
          target="_blank"
          rel="noopener noreferrer"
          variant="coloured"
          data-dark
        >
          Livepeer.js
        </A>{" "}
        (Javascript),{" "}
        <A
          href="https://github.com/livepeer/lpms"
          target="_blank"
          rel="noopener noreferrer"
          variant="coloured"
          data-dark
        >
          LPMS
        </A>{" "}
        (video development in C or Go), or{" "}
        <A
          href="https://github.com/livepeer/go-livepeer"
          target="_blank"
          rel="noopener noreferrer"
          variant="coloured"
          data-dark
        >
          Go-Livepeer
        </A>{" "}
        (go).
      </>
    )
  },
  {
    icon: <FiBook />,
    children: (
      <>
        View the{" "}
        <A
          href="https://github.com/livepeer/Grant-Program"
          target="_blank"
          rel="noopener noreferrer"
          variant="coloured"
          data-dark
        >
          Grant Proposals
        </A>{" "}
        to see application concepts with some funding attached.
      </>
    )
  },
  {
    icon: <FiMessageCircle />,
    children: (
      <>
        Chat with the development team in{" "}
        <A
          href="https://discord.com/invite/RR4kFAh"
          target="_blank"
          rel="noopener noreferrer"
          variant="coloured"
          data-dark
        >
          Discord
        </A>{" "}
        - we’re a welcoming bunch, so don’t be shy. Ask how you can get
        involved.
      </>
    )
  },
  {
    icon: <FiPlay />,
    children: (
      <>
        Looking to build a video application using Livepeer? Check out our open{" "}
        <A
          href="https://livepeer.readthedocs.io/en/latest/"
          target="_blank"
          rel="noopener noreferrer"
          variant="coloured"
          data-dark
        >
          developer docs
        </A>{" "}
        or enterprise hosted services at{" "}
        <A
          href="https://livepeer.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="coloured"
          data-dark
        >
          livepeer.com
        </A>
        .
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
      sx={{ pt: ["80px", null, null, "160px"] }}
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
          ".list-item:not(:last-of-type)": {
            mb: "40px"
          }
        }}
      >
        {listItems.map((item, i) => (
          <ListItem
            key={`get-involved-link-${i}`}
            className="list-item"
            {...item}
          />
        ))}
      </Box>
    </Grid>
  </Box>
)

export default GetInvolvedSection
