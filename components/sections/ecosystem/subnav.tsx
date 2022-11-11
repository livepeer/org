import { useCallback, useEffect, useState } from "react";
import { Box, Grid, Link } from "theme-ui";

export const Subnav = (pageData) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    if (scrollTop > 632) setHasScrolled(true);
    else setHasScrolled(false);
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const {
    apps_section,
    video_section,
    web3_section,
    stacking_section,
    exchanges_section,
    community_section,
  } = pageData.data || {};

  console.log();

  console.log(pageData);
  return (
    <Box
      sx={{
        background: "#FFFFFFEE",
        width: "100%",
        height: "72px",
        zIndex: "999",
        transition: "box-shadow .3s, top .3s",
        boxShadow: hasScrolled ? "magical" : "none",
        backdropFilter: hasScrolled ? "saturate(180%) blur(5px)" : "none",
        top: "72px",
        position: "sticky",
        display: ["none", "grid"],
        placeItems: "center",
        gap: "32px",
      }}>
      <Grid
        sx={{
          gridAutoFlow: "column",
          maxWidth: "1024px",
          width: "100%",
          textAlign: "center",
          fontWeight: "600",
        }}>
        <Link href="#apps">{apps_section.title}</Link>
        <Link href="#videotools">{video_section.title}</Link>
        <Link href="#web3techstack">{web3_section.title}</Link>
        <Link href="#stakingpartners">{stacking_section.title}</Link>
        <Link href="#exchanges">{exchanges_section.title}</Link>
        <Link href="#communitytools">{community_section.title}</Link>
      </Grid>
    </Box>
  );
};
