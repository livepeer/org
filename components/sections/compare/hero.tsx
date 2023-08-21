import IconHero from "components/layouts/icon-hero";

const CompareHero = ({ title, subtitle, background, cta }) => {
  return (
    <IconHero
      withAnimation
      title={title}
      subtitle={subtitle}
      background={background}
      pushSx={{ py: 0 }}
      cta={cta}
      illustration={<img width="500" src="/images/hero/graphic.png" />}
    />
  );
};

export default CompareHero;
