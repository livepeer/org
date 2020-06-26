import SectionLayout from "components/layouts/section"
import { Grid, Flex } from "theme-ui"
import IconLinkCard, {
  IconLinkProps
} from "components/primitives/cards/icon-link"
import {
  FaDiscourse,
  FaDiscord,
  FaTwitter,
  FaReddit,
  FaTelegram,
  FaMedium
} from "react-icons/fa"
import { Divider } from "components/primitives/divider"

const links: IconLinkProps[] = [
  {
    icon: <FaDiscourse />,
    label: (
      <>
        Join Livepeer on&nbsp;<b>Discourse</b>
      </>
    ),
    href: "/"
  },
  {
    icon: <FaDiscord />,
    label: (
      <>
        Join our&nbsp;<b>Discord Server</b>
      </>
    ),
    href: "/"
  },
  {
    icon: <FaTwitter />,
    label: (
      <>
        twitter.com/<b>livepeer</b>
      </>
    ),
    href: "https://twitter.com/livepeer",
    isExternal: true
  },
  {
    icon: <FaReddit />,
    label: (
      <>
        Read our subreddits on&nbsp;<b>Reddit</b>
      </>
    ),
    href: ""
  },
  {
    icon: <FaTelegram />,
    label: (
      <>
        Contact us on&nbsp;<b>Telegram</b>
      </>
    ),
    href: ""
  },
  {
    icon: <FaMedium />,
    label: (
      <>
        medium.com/<b>livepeer</b>
      </>
    ),
    href: "https://medium.com/livepeer",
    isExternal: true
  }
]

const CommunitySection = () => (
  <SectionLayout
    title="Community"
    titleLabel="Subtitle"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    pushSx={{ pt: "160px" }}
  >
    <Grid
      columns={"repeat(3, 372px)"}
      gap={[3, null, null, null, 0]}
      sx={{
        mx: "auto",
        justifyContent: "center",
        gridTemplateColumns: [
          "372px",
          null,
          null,
          null,
          ({ space }) => `372px calc(372px + 2 * ${space[3]}px) 372px`
        ]
      }}
    >
      {links.map((link, i) => {
        if (i === 1 || i === 4) {
          return (
            <Flex key={`icon-link-${link.href}`}>
              <Divider
                isVertical
                size="72px"
                pushSx={{ mx: 3, display: ["none", null, null, null, "block"] }}
              />
              <IconLinkCard pushSx={{ width: "372px" }} {...link} />
              <Divider
                isVertical
                size="72px"
                pushSx={{ mx: 3, display: ["none", null, null, null, "block"] }}
              />
            </Flex>
          )
        }
        return (
          <IconLinkCard
            key={`icon-link-${link.href}`}
            pushSx={{ width: "372px" }}
            {...link}
          />
        )
      })}
    </Grid>
  </SectionLayout>
)

export default CommunitySection
