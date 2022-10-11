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
        py: 0,
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
          width: "100%",
          display: "grid",
          gridTemplateColumns: [
            "1fr",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(3,1fr)",
          ],
          gap: 4,
          paddingY: 4,
        }}>
        {/* eslint-disable-next-line array-callback-return */}
        {apps.map((app, i) => {
          // console.log("kk", app);
          const {
            title,
            richtext,
            website,
            twitter,
            discord,
            image,
            linkedin,
          } = app.node.data || {};
          switch (cardType) {
            case "app":
              return (
                <AppCard
                  key={title + i}
                  image={image}
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
                <VideoCard
                  key={title + i}
                  image={image}
                  title={title}
                  richtext={richtext}
                  website={website}
                />
              );
            case "web3":
              return (
                <Web3Card
                  key={title + i}
                  image={image}
                  title={title}
                  richtext={richtext}
                  website={website}
                />
              );
            case "staking":
              return (
                <StakingCard
                  key={title + i}
                  image={image}
                  title={title}
                  richtext={richtext}
                  website={website}
                  twitter={twitter}
                  discord={discord}
                  linkedin={linkedin}
                />
              );
            case "exchange":
              return (
                <ExchangeCard
                  key={title + i}
                  image={image}
                  title={title}
                  website={website}
                  twitter={twitter}
                  discord={discord}
                  linkedin={linkedin}
                />
              );
            case "community":
              return (
                <CommunityCard
                  key={title + i}
                  image={image}
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
