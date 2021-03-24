import { Container, Grid } from "theme-ui";
import Tabs, { TabProps } from "components/primitives/tabs";
import { useRouter } from "next/router";
import ImageCard, { ImageCardProps } from "components/primitives/cards/image";
import { useMemo, useRef, useEffect } from "react";
import posts, { categories } from "./posts";
import sectionEffect from "lib/animations/section-effect";
import { useTranslation } from "next-i18next";

const ResourcesDirectory = () => {
  const { t } = useTranslation(["resources"]);
  const router = useRouter();
  const { filter } = router.query;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    sectionEffect(sectionRef.current);
  }, [sectionRef]);

  const filteredCards: ImageCardProps[] = useMemo(() => {
    const filteredPosts = posts.filter((c) =>
      filter ? c.category.value === filter : true
    );
    return filteredPosts.map((p) => ({
      title: p.title,
      description: p.description,
      footnote: p.subtitle,
      linkProps: { link: { ...p.link, label: p.category.label }, as: "div" },
      image: p.image,
      pushContentSx: p.pushContentSx,
    }));
  }, [posts, filter]);

  const handleClick = (value?: string) => {
    if (!value)
      return router.push("/resources", "resources", {
        scroll: false,
      });
    return router.push(
      `/resources?filter=${value}`,
      `/resources?filter=${value}`,
      {
        scroll: false,
      }
    );
  };

  const tabs: TabProps[] = useMemo(
    () => [
      {
        label: t("page-resources-menu-all").toString(),
        onClick: () => {
          handleClick();
        },
        isSelected: !filter,
      },
      ...categories.map((c) => ({
        label: t(c.translationKey),
        onClick: () => {
          handleClick(c.value);
        },
        isSelected: filter === c.value,
      })),
    ],
    [filter, categories]
  );

  return (
    <Container
      id="tabs"
      variant="section"
      className="hide__section"
      ref={sectionRef}>
      <Tabs
        items={tabs}
        pushSx={{ justifyContent: ["flex-start", "center"] }}
      />
      <Grid
        columns={[
          "minmax(auto, 366px)",
          null,
          "repeat(2, minmax(auto, 366px))",
          null,
          "repeat(3, 366px)",
        ]}
        gap={4}
        sx={{
          my: 5,
          justifyContent: "center",
        }}>
        {filteredCards.map((c) => (
          <ImageCard
            {...c}
            key={`resource-card-${c.title}`}
            isLink
            pushContentSx={{
              height: "315px",
              overflow: "hidden",
              ...c.pushContentSx,
            }}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ResourcesDirectory;
