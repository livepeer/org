import { useEffect } from "react";
import { useTranslation } from "next-i18next";

import { Box, Button, Container, Grid, Heading } from "theme-ui";
import { FiArrowUpRight } from "react-icons/fi";

import Head, { HeadProps } from "components/primitives/head";
import HugeCard from "components/primitives/cards/huge";
import ListItem from "components/primitives/list-item";

import SectionLayout from "components/layouts/section";

import Nav from "components/sections/nav";
import Footer from "components/sections/footer";
import CommunitySection from "components/sections/home/community";
import PrimerBanner from "components/sections/home/primer-banner";
import GetInvolvedSection from "components/sections/oss/get-involved";

import LivepeerLogo from "components/svgs/livepeer-logo";

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
      description: t("page-home-meta-description"),
      url: "https://livepeer.org",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  return (
    <>
      <Head {...headProps} />
      <Nav background="dark" />
      <Box as="main">
        <section
          style={{
            background:
              "url(/images/demuxed/ribbon.svg) left top no-repeat, url(/images/demuxed/orchestrator.svg) right bottom no-repeat, #111C18",
            color: "#fff",
            padding: "9rem 2rem",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>
          <div
            style={{
              width: "800px",
              padding: "2rem",
              maxWidth: "100vw",
              margin: "auto",
              display: "grid",
              gap: "2Rem",
              background: "rgb(17, 28, 24, 0.7)",
              backdropFilter: "blur(8px)",
            }}>
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                gap: ".66em",
                fontSize: "min(6vw, 3rem)",
              }}>
              <LivepeerLogo
                isDark
                pushSx={{ width: "auto", height: "1.25em" }}
              />

              <span>×</span>

              <img
                alt="Demuxed"
                src="/images/demuxed/demuxed.svg"
                style={{
                  width: "auto",
                  height: "1.25em",
                  marginBottom: "0.075em",
                }}
              />
            </h1>

            <p style={{ fontSize: "1.33em", whiteSpace: "nowrap" }}>
              Hi Video Devs 👋&nbsp;&nbsp;
              <wbr />
              We can’t wait to meet you!
            </p>

            <p style={{ fontSize: "1.33em" }}>
              Visit the Livepeer sponsor booth (next to Mux) for some sweet
              merch and chat with our product and engineering teams about the
              latest developments in open video infrastructure.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2em",
              }}>
              <a
                href="https://livepeer.typeform.com/livepeerdemuxed"
                target="_blank"
                rel="noreferrer">
                <Button variant="primary">
                  Want Extra Special Swag?
                  <FiArrowUpRight />
                </Button>
              </a>
              <a
                href="https://discord.gg/livepeer"
                target="_blank"
                rel="noreferrer">
                <Button variant="secondary">
                  Join Discord
                  <FiArrowUpRight />
                </Button>
              </a>
            </div>
          </div>
        </section>

        <SectionLayout background="muted" pushSx={{ py: ["80px", "160px"] }}>
          <Grid
            columns={[
              "minmax(auto, 632px)",
              null,
              "repeat(2, minmax(auto, 632px))",
            ]}
            sx={{ justifyContent: "center" }}>
            <HugeCard
              {...{
                titleLabel: "Video",
                title: "Innovators Meetup",
                listItems: [],
                cta: {
                  label: "Register",
                  isLink: true,
                  isExternal: true,
                  href: "",
                },
                accent: "primary",
                headerIllustration: <img src={"/images/primer/video.svg"} />,
              }}>
              <p>
                Join Livepeer for an evening of networking, just a short walk
                from the main Demuxed venue.
              </p>
              <br />
              <p>
                <b>
                  <time>
                    06:00-09:00PM
                    <br />
                    Tuesday, 24 October, 2023.
                  </time>
                </b>
              </p>
              <br />
              <p>
                <b>
                  <u>
                    <a
                      href="https://www.hotelviasf.com/the-hotel/bar"
                      target="_blank"
                      rel="noreferrer">
                      BarVIA
                    </a>
                  </u>
                  <br />
                  138 King St. San Francisco, CA, 94107
                </b>
              </p>
            </HugeCard>
            <HugeCard
              {...{
                titleLabel: "Demuxed",
                title: "Livepeer talk with Eric Tang",
                listItems: [],
                cta: {
                  label: "Register",
                  isLink: true,
                  isExternal: true,
                  href: "",
                },
                accent: "primary",
                headerIllustration: (
                  <img src={"/images/demuxed/eric.png"} width="85" />
                ),
              }}>
              <p>
                Unmasking Digital Deception: The Content Authenticity Initiative
                For Video Engineers.
              </p>
              <br />
              <p>
                <b>
                  <time>
                    12:25-12:40 PM
                    <br />
                    Wednesday, 25 October, 2023.
                  </time>
                </b>
              </p>
              <br />
              <p>
                <b>
                  <u>
                    <a
                      href="https://terrasf.com/"
                      target="_blank"
                      rel="noreferrer">
                      Terra Gallery & Event Venue
                    </a>
                  </u>
                  <br />
                  511 Harrison St, San Francisco, CA 94105
                </b>
              </p>
            </HugeCard>
          </Grid>
        </SectionLayout>

        <PrimerBanner
          label={"Primer"}
          title={t("page-home-primer-title")}
          subtitle={t("page-home-primer-text")}
          ctaText={t("page-home-primer-cta")}
        />

        <GetInvolvedSection
          label={t("page-oss-collaborate", { ns: "oss" })}
          title={t("page-oss-collaborate-title", { ns: "oss" })}
          subtitle={t("page-oss-collaborate-intro", { ns: "oss" })}
        />

        <Box sx={{ position: "relative", zIndex: "general" }}>
          <Container
            variant="section"
            sx={{ py: ["80px", null, null, "160px"] }}>
            <Grid columns={[1, null, 2]} gap={4} sx={{ alignItems: "center" }}>
              <Box>
                <Heading
                  variant="heading.3"
                  sx={{
                    textAlign: "left",
                    fontFamily: "body",
                    mb: "24px",
                  }}>
                  Livepeer Studio
                </Heading>
                <Heading
                  variant="heading.5"
                  sx={{
                    textAlign: "left",
                    mb: "24px",
                  }}>
                  Livepeer Studio is a high-performance video streaming platform
                  for developers. It's scalable, reliable, and delivers up to{" "}
                  <strong>90% cost savings</strong>.
                </Heading>
                <Heading variant="heading.5" sx={{ textAlign: "left" }}>
                  Connect with us if you are...
                </Heading>
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
                <Button variant="primary">
                  Talk to a Livepeer Studio Expert
                  <FiArrowUpRight />
                </Button>
              </Box>
              <img src="/images/demuxed/livepeer-studio.png" />
            </Grid>
          </Container>
        </Box>

        <CommunitySection
          title={t("page-home-communities-title")}
          subtitle={t("page-home-communities-text")}
          label={t("page-home-communities")}
        />
      </Box>
      <Footer isDark />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return { props: {} };
}
