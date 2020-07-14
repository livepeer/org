import SectionLayout from "components/layouts/section"
import { Grid, Flex } from "theme-ui"
import IconLink, { IconLinkProps } from "components/primitives/links/icon"
import {
  FaDiscourse,
  FaDiscord,
  FaTwitter,
  FaReddit,
  FaTelegram,
  FaMedium
} from "react-icons/fa"
import Divider from "components/primitives/divider"

const links: IconLinkProps[] = [
  {
    icon: <FaDiscourse />,
    label: (
      <>
        Join Livepeer on&nbsp;<b>Discourse</b>
      </>
    ),
    href: "https://forum.livepeer.org/",
    isExternal: true
  },
  {
    icon: <FaDiscord />,
    label: (
      <>
        Join our&nbsp;<b>Discord Server</b>
      </>
    ),
    href: "https://discord.com/invite/RR4kFAh",
    isExternal: true
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
    href: "https://www.reddit.com/r/livepeer/",
    isExternal: true
  },
  {
    icon: <FaTelegram />,
    label: (
      <>
        Contact us on&nbsp;<b>Telegram</b>
      </>
    ),
    href: "https://t.me/livepeer",
    isExternal: true
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

const CommunitySection = ({ title = "Join a Livepeer Community" }) => (
  <SectionLayout
    title={title}
    titleLabel="Communities"
    subtitle="Discover interesting people, groups and communities related to Livepeer."
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
              <IconLink pushSx={{ width: "372px" }} {...link} />
              <Divider
                isVertical
                size="72px"
                pushSx={{ mx: 3, display: ["none", null, null, null, "block"] }}
              />
            </Flex>
          )
        }
        return (
          <IconLink
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
