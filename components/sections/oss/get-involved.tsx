/** @jsx jsx */
import { jsx, Box, Text, Heading, Link as A, Grid } from "theme-ui";
import {
  FiGithub,
  FiCode,
  FiBook,
  FiMessageCircle,
  FiPlay,
} from "react-icons/fi";
import ListItem, { ListItemProps } from "components/primitives/list-item";
import Link from "next/link";

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
          variant="accent"
          data-dark>
          Livepeer.js
        </A>{" "}
        contributor guidelines.
      </>
    ),
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
          variant="accent"
          data-dark>
          Livepeer.js
        </A>{" "}
        (Javascript),{" "}
        <A
          href="https://github.com/livepeer/lpms"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          LPMS
        </A>{" "}
        (video development in C or Go), or{" "}
        <A
          href="https://github.com/livepeer/go-livepeer"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Go-Livepeer
        </A>{" "}
        (go).
      </>
    ),
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
          variant="accent"
          data-dark>
          Grant Proposals
        </A>{" "}
        to see application concepts with some funding attached.
      </>
    ),
  },
  {
    icon: <FiMessageCircle />,
    children: (
      <>
        Chat with the development team in{" "}
        <A
          href="https://discord.gg/uaPhtyrWsF"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Discord
        </A>{" "}
        - we’re a welcoming bunch, so don’t be shy. Ask how you can get
        involved.
      </>
    ),
  },
  {
    icon: <FiPlay />,
    children: (
      <>
        Looking to build a video application using Livepeer? Check out the open{" "}
        <A
          target="_blank"
          href="https://docs.livepeer.org/video-developers/overview"
          variant="accent"
          data-dark>
          developer docs
        </A>
        or hosted gateway service <br /> at{" "}
        <A
          href="https://livepeer.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Livepeer.com
        </A>
        .
      </>
    ),
  },
];

const GetInvolvedSection = ({ label, title, subtitle }) => (
  <Box sx={{ bg: "text", color: "background" }}>
    <Grid
      variant="layout.section"
      gap={5}
      columns={[1, null, 2]}
      sx={{ pt: ["80px", null, null, "160px"] }}>
      <Box>
        <Text
          variant="section.titleLabel"
          sx={{ textAlign: ["center", null, "left"] }}>
          {label}
        </Text>
        <Heading
          variant="section.title"
          sx={{ textAlign: ["center", null, "left"] }}>
          {title}
        </Heading>
        <Heading
          variant="section.subtitle"
          sx={{ textAlign: ["center", null, "left"], color: "lightGray" }}>
          {subtitle}
        </Heading>
      </Box>
      <Box
        sx={{
          ".list-item:not(:last-of-type)": {
            mb: "40px",
          },
        }}>
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
);

export default GetInvolvedSection;
