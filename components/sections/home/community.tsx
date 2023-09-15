import SectionLayout from "components/layouts/section";
import { Grid, Flex } from "theme-ui";
import IconLink, { IconLinkProps } from "components/primitives/links/icon";
import { FaDiscourse, FaDiscord, FaTwitter, FaMedium } from "react-icons/fa";
import Divider from "components/primitives/divider";

const links: IconLinkProps[] = [
  {
    icon: <FaDiscord />,
    label: (
      <>
        Join our&nbsp;<b>Discord Server</b>
      </>
    ),
    href: "https://discord.gg/livepeer",
    isExternal: true,
  },
  {
    icon: <FaTwitter />,
    label: (
      <>
        twitter.com/<b>livepeer</b>
      </>
    ),
    href: "https://twitter.com/Livepeer",
    isExternal: true,
  },
  {
    icon: <FaDiscourse />,
    label: (
      <>
        Join our forum on&nbsp;<b>Discourse</b>
      </>
    ),
    href: "https://forum.livepeer.org/",
    isExternal: true,
  },
  {
    icon: <FaMedium />,
    label: (
      <>
        medium.com/<b>livepeer-blog</b>
      </>
    ),
    href: "https://medium.com/livepeer-blog",
    isExternal: true,
  },
];

const CommunitySection = ({ title, subtitle, label }) => (
  <SectionLayout
    background="muted"
    title={title}
    titleLabel={label}
    subtitle={subtitle}
    pushSx={{ pt: "120px" }}>
    <Grid
      columns={"repeat(2, 372px)"}
      gap={[2, null, null, null, 0]}
      sx={{
        mx: "auto",
        justifyContent: "center",
        gridTemplateColumns: [
          "372px",
          null,
          null,
          null,
          ({ space }) => `372px calc(372px + 2 * ${space[3]}px)`,
        ],
      }}>
      {links.map((link, i) => {
        if (i === 1 || i === 3) {
          return (
            <Flex key={`icon-link-${link.href}`}>
              <Divider
                isVertical
                size="72px"
                pushSx={{ mx: 3, display: ["none", null, null, null, "block"] }}
              />
              <IconLink pushSx={{ width: "372px" }} {...link} />
            </Flex>
          );
        }
        return (
          <IconLink
            key={`icon-link-${link.href}`}
            pushSx={{ width: "372px" }}
            {...link}
          />
        );
      })}
    </Grid>
  </SectionLayout>
);

export default CommunitySection;
