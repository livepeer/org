import { Container, Box, Text, Heading, Button, Grid } from "theme-ui"
import ListItem, { ListItemProps } from "components/primitives/list-item"
import { FiCheckCircle } from "react-icons/fi"
import NetworkSvg from "components/svgs/network"

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

const PublicNetworkBanner = () => (
  <Box sx={{ bg: "muted", px: [0, null, null, 3], pt: "160px", pb: "80px" }}>
    <Container
      variant="section"
      sx={{
        bg: "text",
        color: "background",
        pt: ["164px", null, 5],
        pb: [4, 5],
        px: [4, null, null, "96px"],
        position: "relative",
        overflow: "hidden",
        borderRadius: [0, null, null, "lg"],
        boxShadow: "magical",
        zIndex: "general"
      }}
    >
      <Grid columns={[1, null, 2]} gap={4} sx={{ zIndex: "general" }}>
        <Box sx={{ zIndex: "general" }}>
          <Text
            variant="large"
            sx={{ mb: 2, textAlign: "left", zIndex: "general" }}
          >
            Build with
          </Text>
          <Heading
            variant="heading.3"
            sx={{ textAlign: "left", fontFamily: "body", zIndex: "general" }}
          >
            The Public Network
          </Heading>
        </Box>
        <Box sx={{}}>
          <Box>
            {listItems.map((item, i) => (
              <ListItem
                key={`get-involved-link-${i}`}
                className="list-item"
                pushSx={{ mb: "40px" }}
                gap={3}
                {...item}
              />
            ))}
          </Box>
          <Button sx={{ width: "fit-content" }}>Read the docs</Button>
        </Box>
      </Grid>
      <NetworkSvg
        pushSx={{
          position: "absolute",
          bottom: ["unset", null, "-136px"],
          left: ["-164px", null, "-104px"],
          top: ["-136px", null, "unset"]
        }}
      />
    </Container>
  </Box>
)

export default PublicNetworkBanner
