import { Box, Container, Heading } from "theme-ui";
import { AppCard } from "./cards/app-card";
import { CommunityCard } from "./cards/community-card";
import { DefaultCard } from "./cards/default-card";
import { ExchangeCard } from "./cards/exchange-card";
import { StakingCard } from "./cards/staking-card";
import { VideoCard } from "./cards/video-card";
import { Web3Card } from "./cards/web3-card";

export const DefaultList = ({ apps, title, subtitle, inverted, cardType }) => {
  return (
    <Container
      variant="section"
      sx={{
        pt: [4, 5],
        px: [4, null, null, "96px"],
        pb: [7, null, null, 5],
        position: "relative",
        overflow: "hidden",
      }}>
      <Heading
        sx={{
          variant: ["text.heading.2", "text.heading.1"],

          background: inverted
            ? ({ colors }) =>
                `linear-gradient(90deg, #00A55F 0%, ${colors.gradient.mid} 100%)`
            : "unset",
          WebkitBackgroundClip: inverted ? "text" : "unset",
          WebkitTextFillColor: inverted ? "transparent" : "unset",
        }}>
        {title}
      </Heading>
      <Heading
        variant="section.subtitle"
        sx={{ maxWidth: 700, color: inverted ? "white" : "section.subtitle" }}
        mt={3}>
        {subtitle}
      </Heading>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "repeat(3,1fr)"],
          gap: 4,
          paddingY: 4,
        }}>
        {apps.map((app, i) => {
          const { title, richtext, website, twitter, discord, linkedin } =
            app.node.data || {};
          switch (cardType) {
            case "app":
              return (
                <AppCard
                  key={title + i}
                  title={title}
                  richtext={richtext}
                  website={website}
                  twitter={twitter}
                  discord={discord}
                  linkedin={linkedin}
                />
              );
            case "video":
              return (
                <VideoCard key={title + i} title={title} richtext={richtext} />
              );
            case "web3":
              return (
                <Web3Card key={title + i} title={title} richtext={richtext} />
              );
            case "staking":
              return (
                <StakingCard
                  key={title + i}
                  title={title}
                  richtext={richtext}
                />
              );
            case "exchange":
              return (
                <ExchangeCard
                  key={title + i}
                  title={title}
                  richtext={richtext}
                  linkedin={linkedin}
                />
              );
            case "community":
              return (
                <CommunityCard
                  key={title + i}
                  title={title}
                  richtext={richtext}
                />
              );
            default:
              <DefaultCard key={title + i} title={title} richtext={richtext} />;
          }
        })}
      </Box>
    </Container>
  );
};
