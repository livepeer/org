import { Box, Flex, Grid, Link as A } from "theme-ui"
import SectionLayout from "components/layouts/section"
import HostedApiSvg, { MobileHostedApiSvg } from "components/svgs/hosted-api"
import ListItem, { ListItemProps } from "components/primitives/list-item"
import { FiCheckCircle } from "react-icons/fi"

const listItems: ListItemProps[] = [
  {
    icon: <FiCheckCircle />,
    children:
      "Affordable, scalable, high quality transcoding payable via Stripe"
  },
  {
    icon: <FiCheckCircle />,
    children: "Easy to use APIs and simple docs so you can launch quickly"
  },
  {
    icon: <FiCheckCircle />,
    children: "Recording, storage and CDN playback available out of the box"
  }
]

const HostedApiSection = () => (
  <SectionLayout
    titleLabel="Build with"
    title="Livepeer.com"
    subtitle="Full-stack live transcoding and VOD products enable companies and non-profits to launch video products quickly."
    background="muted"
    pushSx={{ pt: [6, null, "80px"] }}
    headingContainerPushSx={{
      mb: 4,
      "& > div": { textAlign: ["left", null, "center"] },
      "& > h2": { textAlign: ["left", null, "center"] }
    }}
  >
    <Box
      sx={{
        position: "absolute",
        height: "376px",
        width: "376px",
        overflow: "visible",
        display: ["block", null, "none"],
        top: "-140px",
        left: "-140px"
      }}
    >
      <MobileHostedApiSvg
        pushSx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      />
    </Box>
    <Flex
      sx={{
        flexDirection: ["column-reverse", null, "column"],
        alignItems: ["flex-start", null, "center"]
      }}
    >
      <A
        variant="buttons.primary"
        href="https://livepeer.com/"
        target="_blank"
        sx={{ zIndex: "general" }}
      >
        Visit livepeer.com
      </A>
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
