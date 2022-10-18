import { useCallback, useEffect, useState } from "react";
import { Box, Grid, Link } from "theme-ui";

export const Subnav = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    if (scrollTop > 540) setHasScrolled(true);
    else setHasScrolled(false);
  }, []);

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
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
        <Link href="#apps">Apps</Link>
        <Link href="#videotools">Video Tools</Link>
        <Link href="#web3techstack">Web3 Tech Stack</Link>
        <Link href="#stakingpartners">Staking Partners</Link>
        <Link href="#exchanges">Exchanges</Link>
        <Link href="#communitytools">Community Tools</Link>
      </Grid>
    </Box>
  );
};
