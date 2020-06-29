import { Button, Box, Flex, Grid } from "theme-ui"
import SectionLayout from "components/layouts/section"
import HostedApiSvg from "components/icons/hosted-api"
import ListItem, { ListItemProps } from "components/primitives/list-item"
import { FiCheckCircle } from "react-icons/fi"

const listItems: ListItemProps[] = [
  {
    icon: <FiCheckCircle />,
    children:
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes."
  },
  {
    icon: <FiCheckCircle />,
    children:
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes."
  },
  {
    icon: <FiCheckCircle />,
    children:
      "At vero eos et accusamus et iusto odio digniss imos ducimus qui blanditiis praes."
  }
]

const HostedApiSection = () => (
  <SectionLayout
    titleLabel="Build with"
    title="A Hosted API"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    background="muted"
    headingContainerPushSx={{ mb: 4 }}
  >
    <Flex
      sx={{
        flexDirection: ["column-reverse", null, "column"],
        alignItems: "center"
      }}
    >
      <Button sx={{ width: "fit-content", zIndex: "general" }}>
        Visit livepeer.com
      </Button>
      <Box
        sx={{
          position: "relative",
          height: "384px",
          width: "100%",
          overflow: "visible",
          display: ["none", null, "block"]
        }}
      >
        <HostedApiSvg
          pushSx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />
      </Box>
      <Grid
        columns={[1, null, 3]}
        gap={4}
        sx={{ zIndex: "general", mb: [5, null, 0] }}
      >
        {listItems.map((item, i) => (
          <ListItem key={`hosted-api-link-${i}`} gap={3} {...item} />
        ))}
      </Grid>
    </Flex>
  </SectionLayout>
)

export default HostedApiSection
