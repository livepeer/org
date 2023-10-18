import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import styled from "@emotion/styled";

import { Box, Button, Container, Grid, Heading, Link, Text } from "theme-ui";
import { FiArrowUpRight } from "react-icons/fi";

import Head, { HeadProps } from "components/primitives/head";
import HugeCard from "components/primitives/cards/huge";
import ListItem from "components/primitives/list-item";

import SectionLayout from "components/layouts/section";

import Nav from "components/sections/nav";
import Footer from "components/sections/footer";
import CommunitySection from "components/sections/home/community";
import PrimerBanner from "components/sections/home/primer-banner";
import DemuxedBanner from "components/sections/home/demuxed-banner";
import GrantsSection from "components/sections/grants/overview";

import LivepeerLogo from "components/svgs/livepeer-logo";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Demuxed() {
  const { t } = useTranslation(["home", "oss"]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "initial";
    };
  }, []);

  const headProps: HeadProps = {
    meta: {
      title: "Demuxed 2023",
      description:
        "Visit the Livepeer sponsor booth (next to Mux) for some sweet merch and chat with our product and engineering teams about the latest developments in open video infrastructure.",
      url: "https://livepeer.org",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  const HeroSectionStyled = styled.div({
    background:
      "url(/images/demuxed/transcoder.svg) left top no-repeat, url(/images/demuxed/orchestrator.svg) right bottom no-repeat, #111C18",
    color: "#fff",
    padding: "9rem 2rem",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    transition: "0.3s",
    ["@media (max-width: 1024px)"]: {
      background: "#111C18",
      padding: "5rem 2rem",
    },
  });

  const InnerContainer = styled.div({
    width: "800px",
    padding: "2rem",
    maxWidth: "100vw",
    margin: "auto",
    display: "grid",
    gap: "2rem",
    borderRadius: "4px",
  });

  const Header = styled.h1({
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    gap: ".66em",
    fontSize: "min(6vw, 3rem)",
    ["@media (max-width: 1024px)"]: {
      flexDirection: "column",
      alignItems: "center",
    },
  });

  const Paragraph = styled.p({
    fontSize: "2.4em",
    fontWeight: "bold",
    whiteSpace: "nowrap",

    ["@media (max-width: 768px)"]: {
      fontSize: "1.8em",
      marginLeft: "-0.5em",
    },
  });

  const Image = styled.img({
    width: "auto",
    height: "1.6em",
    marginBottom: "0.075em",
  });

  return (
    <>
      <Head {...headProps} />
      <Nav background="dark-green" />
      <Box as="main">
        <HeroSectionStyled>
          <InnerContainer>
            <Header>
              <LivepeerLogo
                isDark
                pushSx={{ width: "auto", height: "1.8em" }}
              />
              <span>×</span>
              <Image alt="Demuxed" src="/images/demuxed/demuxed.svg" />
            </Header>
            <Paragraph>
              Hello Video Devs 👋&nbsp;&nbsp;
              <br />
              We can’t wait to meet you!
            </Paragraph>
          </InnerContainer>
        </HeroSectionStyled>
        <DemuxedBanner
          label={""}
          title={"Swag for Video Innovators"}
          subtitle={
            "Visit the Livepeer booth (next to Mux) to chat with our product and engineering team, and complete this form to have a special piece of swag waiting for you."
          }
          ctaText={"Learn more"}
        />
        <SectionLayout
          background="muted"
          pushSx={{ mt: "-100px", pt: "0px", pb: "80px" }}>
          <Grid
            columns={[
              "minmax(auto, 632px)",
              null,
              "repeat(2, minmax(auto, 632px))",
            ]}
            sx={{ justifyContent: "center" }}>
            <HugeCard
              {...{
                titleLabel: "Join Our Side Event",
                title: "Video Innovators Happy Hour",
                listItems: [],
                cta: {
                  label: "Register",
                  isLink: true,
                  isExternal: true,
                  href: "https://lu.ma/ed8bfogc",
                },
                accent: "primary",
                headerIllustration: <img src={"/images/primer/video.svg"} />,
              }}>
              <Text>
                Meet other leading video technology innovators and disruptors
                for a relaxing evening after the main Demuxed programming.
                Perfect for those interested in video tech from AI, content
                authenticity and provenance to distributed infrastructure and
                community engagement. Enjoy a taco bar and beverages at the
                local BarVIA rooftop. Please register as space is limited.
              </Text>
              <Text
                sx={{
                  fontWeight: "bold",
                  marginTop: 4,
                }}>
                06:00 - 09:00PM
                <br />
                Tuesday, 24 October, 2023.
              </Text>
              <Text
                sx={{
                  fontWeight: "bold",
                  marginTop: 3,
                }}>
                <Link
                  sx={{
                    textDecoration: "underline",
                  }}
                  href="https://www.hotelviasf.com/the-hotel/bar">
                  BarVIA
                </Link>
                <br />
                138 King St. San Francisco, CA, 94107
              </Text>
            </HugeCard>
            <HugeCard
              {...{
                titleLabel: "Talk by Eric Tang",
                title: "The CAI for Video Engineers",
                listItems: [],
                cta: {
                  label: "Demuxed Schedule",
                  isLink: true,
                  isExternal: true,
                  href: "https://2023.demuxed.com/#schedule",
                },
                accent: "primary",
                headerIllustration: (
                  <img src={"/images/demuxed/eric.png"} width="85" />
                ),
              }}>
              <Text>
                Don't miss Livepeer's Founder and CTO, Eric Tang give his talk
                "Unmasking Digital Deception: The Content Authenticity
                Initiative For Video Engineers".
              </Text>
              <Text
                sx={{
                  marginTop: 2,
                }}>
                With generative AI on the rise, it's time to arm ourselves with
                the tools to authenticate digital content. We'll talk about the
                latest tools available today and how you can integrate it
                seamlessly into your video tech stack.
              </Text>
              <Text
                sx={{
                  fontWeight: "bold",
                  marginTop: 4,
                }}>
                12:25-12:40 PM
                <br />
                Wednesday, 25 October, 2023.
              </Text>

              <Text
                sx={{
                  fontWeight: "bold",
                  marginTop: 3,
                }}>
                <Link
                  sx={{
                    textDecoration: "underline",
                  }}
                  href="https://terrasf.com/">
                  Terra Gallery & Event Venue
                </Link>
                <br />
                511 Harrison St, San Francisco, CA 94105
              </Text>
            </HugeCard>
          </Grid>
        </SectionLayout>

        <GrantsSection
          label={t("Livepeer Grants")}
          title={t("Funding Video Innovation")}
          subtitle={t(
            "The Livepeer Grants program provides funding to individuals and teams building the next generation of video tools and applications, powered by Livepeer. If you’re building the future of video today, submit a grant application and let’s talk about how we might be able to fund your idea."
          )}
        />

        <SectionLayout
          background="muted"
          pushSx={{ mt: "-100px", pt: "0px", pb: "20px" }}>
          <Box sx={{ position: "relative", zIndex: "general" }}>
            <Container
              variant="section"
              sx={{ py: ["80px", null, null, "160px"] }}>
              <Grid
                columns={[1, null, 2]}
                gap={4}
                sx={{ alignItems: "center" }}>
                <Box>
                  <Heading
                    variant="heading.3"
                    sx={{
                      textAlign: "left",
                      fontFamily: "body",
                      mb: "24px",
                    }}>
                    Meet Livepeer Studio
                  </Heading>
                  <Heading
                    variant="heading.5"
                    sx={{
                      textAlign: "left",
                      mb: "24px",
                    }}>
                    Livepeer Studio is a high performance and trustworthy video
                    platform for developers, with up to{" "}
                    <strong>80% cost savings</strong>.
                  </Heading>
                  <Heading variant="heading.5" sx={{ textAlign: "left" }}>
                    Sign up to talk to Livepeer Studio if you are...
                  </Heading>
                  <br />
                  <ListItem icon={"∙"}>Interested in video provenance</ListItem>
                  <ListItem icon={"∙"}>
                    Building an app that needs live streaming
                  </ListItem>
                  <ListItem icon={"∙"}>
                    Building an app that needs video on demand
                  </ListItem>
                  <ListItem icon={"∙"}>
                    Building an app that needs video transcoding
                  </ListItem>
                  <ListItem icon={"∙"}>Interested in AV1 support</ListItem>
                  <br />
                  <Button
                    onClick={() => {
                      window.open(
                        "https://livepeer.typeform.com/to/HTuUHdDR",
                        "_blank"
                      );
                    }}
                    variant="primary">
                    Schedule a Meeting
                    <FiArrowUpRight />
                  </Button>
                </Box>
                <img src="/images/demuxed/livepeer-studio-mockup.png" />
              </Grid>
            </Container>
          </Box>
        </SectionLayout>

        <PrimerBanner
          label={"Primer"}
          title={t("page-home-primer-title")}
          subtitle={t("page-home-primer-text")}
          ctaText={t("page-home-primer-cta")}
        />

        <CommunitySection
          title={t("Join Livepeer Video Builder Community")}
          subtitle={t("page-home-communities-text")}
          label={t("")}
        />
      </Box>
      <Footer isDark />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "oss"])),
    },
    revalidate: 1,
  };
}
