/** @jsx jsx */
import SectionLayout from "components/layouts/section";
import { jsx, Link as A, Box } from "theme-ui";
import StatusCard, {
  StatusCardProps,
} from "components/primitives/cards/status";
import Divider from "components/primitives/divider";
import { FiArrowUpRight } from "react-icons/fi";

const OpenSourceSection = ({ title, subtitle, ctaText, cards }) => {
  const cardItems: StatusCardProps[] = [
    {
      title: cards[0].title,
      description: cards[0].description,
      linkProps: {
        link: {
          label: "go-livepeer",
          href: "https://github.com/livepeer/go-livepeer",
          isExternal: true,
        },
        status: "Go",
      },
      isClickable: true,
    },
    {
      title: cards[1].title,
      description: cards[1].description,
      linkProps: {
        link: {
          label: "protocol",
          href: "https://github.com/livepeer/protocol",
          isExternal: true,
        },
        status: "Solidity",
      },
      isClickable: true,
    },
    {
      title: cards[2].title,
      description: cards[2].description,
      linkProps: {
        link: {
          label: "livepeer.js",
          href: "https://github.com/livepeer/livepeer.js",
          isExternal: true,
        },
        status: "Typescript",
      },
      isClickable: true,
    },
  ];

  return (
    <SectionLayout
      background="black"
      title={title}
      subtitle={subtitle}
      pushSx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: "160px",
      }}
      headingContainerPushSx={{ mb: 4 }}
      withAnimation>
      <A
        href="https://github.com/livepeer/"
        target="_blank"
        rel="noopener noreferrer"
        variant="buttons.primary"
        sx={{ display: "flex" }}>
        {ctaText}{" "}
        <i sx={{ ml: 2, fontSize: 4 }}>
          <FiArrowUpRight />
        </i>
      </A>
      <Divider isVertical isTransparent size={["56px", "72px"]} />
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          gap: 30,
        }}>
        {cardItems.map((card) => (
          <StatusCard
            key={`card-${card.title}`}
            pushSx={{ height: ["300px", "342px"] }}
            isDark
            {...card}
          />
        ))}
      </Box>
    </SectionLayout>
  );
};

export default OpenSourceSection;
