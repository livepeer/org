import IconHero from "components/layouts/icon-hero";
import { Box } from "theme-ui";

const CompareHero = ({ title, subtitle, background, cta }) => {
  return (
    <IconHero
      withAnimation
      title={title}
      subtitle={subtitle}
      background={background}
      pushSx={{ py: 0 }}
      cta={cta}
      illustration={
        <Box sx={{ display: ["none", "none", "none", "block"] }}>
          <img width="500" src="/images/hero/graphic.png" />
        </Box>
      }
    />
  );
};

export default CompareHero;
