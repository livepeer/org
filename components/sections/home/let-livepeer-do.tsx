import SectionLayout from "components/layouts/section";
import { Grid } from "theme-ui";
import IconCard, { IconCardProps } from "components/primitives/cards/icon";
import TokenSvg from "components/svgs/token";
import GpuSvg from "components/svgs/gpu";
import { FiCode } from "react-icons/fi";

const LetLivepeerDoSection = ({
  tokenholders,
  videoMiners,
  developers,
  label,
  title,
  subtitle,
}) => {
  const cards: IconCardProps[] = [
    {
      icon: <FiCode />,
      title: developers.title,
      description: developers.description,
      linkProps: { link: { label: "/developers", href: "/developers" } },
      isClickable: true,
    },
    {
      icon: <GpuSvg style={{ width: 28, height: 28 }} />,
      title: videoMiners.title,
      description: videoMiners.description,
      linkProps: { link: { label: "/orchestrators", href: "/orchestrators" } },
      isClickable: true,
    },
    {
      icon: <TokenSvg style={{ width: 24, height: 24 }} />,
      title: tokenholders.title,
      description: tokenholders.description,
      linkProps: { link: { label: "/delegators", href: "/delegators" } },
      isClickable: true,
    },
  ];
  return (
    <SectionLayout
      titleLabel={label}
      title={title}
      subtitle={subtitle}
      id="get-started"
      background="muted">
      <Grid
        gap={4}
        sx={{
          gridTemplateColumns: [
            "sm",
            null,
            null,
            null,
            ({ sizes: { sm } }) => `repeat(3, ${sm})`,
          ],
          mx: "auto",
          justifyContent: "center",
          position: "relative",
        }}>
        {cards.map((card) => (
          <IconCard key={`card-${card.title}`} {...card} />
        ))}
      </Grid>
    </SectionLayout>
  );
};

export default LetLivepeerDoSection;
