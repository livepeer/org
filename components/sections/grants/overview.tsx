/** @jsx jsx */
import { jsx, Box, Button, Text, Heading, Link as A, Grid } from "theme-ui";
import { FiArrowUpRight } from "react-icons/fi";
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
    icon: <FiBook />,
    children: (
      <>
        {" "}
        <A
          href="https://github.com/livepeer/Grant-Program"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Apply for a grant
        </A>{" "}
      </>
    ),
  },
  {
    icon: <FiMessageCircle />,
    children: (
      <>
        Chat with the grants team in{" "}
        <A
          href="https://discord.gg/livepeer"
          target="_blank"
          rel="noopener noreferrer"
          variant="accent"
          data-dark>
          Discord
        </A>{" "}
        - we’re a welcoming bunch, so don’t be shy.
      </>
    ),
  },
];

const GrantsSection = ({ label, title, subtitle }) => (
  <Box sx={{ bg: "text", color: "background", pb: "80px" }}>
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
          mt: "250px",
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

export default GrantsSection;
