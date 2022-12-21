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
          href="https://github.com/livepeer/livepeer.js/blob/main/.github/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Livepeer.js
        </A>{" "}
        contributor guidelines and look for{" "}
        <A
          href="https://github.com/livepeer/livepeer.js/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          good first issues
        </A>
        .
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
