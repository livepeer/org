import SectionLayout from "components/layouts/section";
import { Box } from "theme-ui";
import ImageCard from "components/primitives/cards/image";
import KeenSliderGrid from "components/layouts/keen-slider-grid";

const EcosystemSection = ({ title, subtitle, label, items }) => (
  <SectionLayout
    background="muted"
    titleLabel={label}
    title={title}
    subtitle={subtitle}
    pushSx={{ pt: 100 }}>
    <KeenSliderGrid withArrowControls>
      {items.map((item, i) => (
        <ImageCard
          key={`ecosystem-card-${i}`}
          title={
            <Box
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "85ch",
              }}>
              {item.title}
            </Box>
          }
          image={{ src: item.imageUrl, alt: item.title }}
          description={item.description}
          linkProps={{
            link: {
              label: item.label,
              href: item.url,
              isExternal: true,
            },
          }}
          pushSx={{ maxWidth: "unset" }}
          isLink
        />
      ))}
    </KeenSliderGrid>
  </SectionLayout>
);

export default EcosystemSection;
