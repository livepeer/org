import PageLayout from "components/layouts/page";
import { useEffect, useState } from "react";
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { staticRequest, gql } from "tinacms";
import { HeadProps } from "components/primitives/head";
import { useTranslation } from "next-i18next";
import { Box, Flex } from "theme-ui";
import { DefaultList } from "components/sections/ecosystem/default-list";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Header } from "components/sections/ecosystem/header";
import { Subnav } from "components/sections/ecosystem/subnav";
import { CtaBanner } from "components/sections/ecosystem/cta-banner";
import { useTina } from "tinacms/dist/edit-state";
import styled from "@emotion/styled";

const query = gql`
  query EcosystemQuery($relativePath: String!) {
    getEcosystemDocument(relativePath: $relativePath) {
      data {
        hero {
          hero_title_dark
          hero_title_green
          hero_description
          hero_eyebrow
        }
        apps_section {
          title
          description
        }
        video_section {
          title
          description
        }
        web3_section {
          title
          description
        }
        stacking_section {
          title
          description
        }
        exchanges_section {
          title
          description
        }
        community_section {
          title
          description
        }
        footer_cta_description
      }
    }
  }
`;

const AnchorWrapper = styled.section`
  :target::before {
    content: "";
    display: block;
    height: 120px; /* fixed header height*/
    margin: -120px 0 0; /* negative fixed header height */
  }
`;

function AppSection({ apps, header }) {
  const [expandApps, setExpandApps] = useState(false);
  const [appsList, setAppsList] = useState(apps.slice(0, 6));

  useEffect(() => {
    if (expandApps) {
      setAppsList(apps);
    } else {
      setAppsList(apps.slice(0, 6));
    }
  }, [expandApps]);

  return (
    <AnchorWrapper id="apps">
      <Box sx={{ bg: "muted", px: 3, py: "40px" }}>
        <DefaultList
          inverted={false}
          apps={appsList}
          title={header.title}
          subtitle={header.description}
          cardType="app"
        />

        <Flex
          onClick={() => {
            setExpandApps(!expandApps);
          }}
          sx={{
            ":hover": {
              cursor: "pointer",
            },
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "20px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>
          {expandApps ? "Collapse" : "Expand"}
          {expandApps ? (
            <BsChevronCompactUp size={"3rem"} />
          ) : (
            <BsChevronCompactDown size={"3rem"} />
          )}
        </Flex>
      </Box>
    </AnchorWrapper>
  );
}

function VideoToolSection({ videos, header }) {
  return (
    <AnchorWrapper id="developertools">
      <Box sx={{ bg: "text", px: 3, py: "40px" }}>
        <DefaultList
          inverted={true}
          apps={videos}
          title={header.title}
          subtitle={header.description}
          cardType="video"
        />
      </Box>
    </AnchorWrapper>
  );
}

function Web3Section({ web3, header }) {
  return (
    <AnchorWrapper id="web3techstack">
      <Box sx={{ px: 3, py: "40px" }}>
        <DefaultList
          inverted={false}
          apps={web3}
          title={header.title}
          subtitle={header.description}
          cardType="web3"
        />
      </Box>
    </AnchorWrapper>
  );
}
function StakingPlatformSection({ staking, header }) {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(#FAFAFA, #FFFFFF)",
          width: "100%",
          height: "80px",
        }}
      />
      <AnchorWrapper id="stakingpartners">
        <Box sx={{ px: 3, py: "40px" }}>
          <DefaultList
            inverted={false}
            apps={staking}
            title={header.title}
            subtitle={header.description}
            cardType="staking"
          />
        </Box>
      </AnchorWrapper>
    </>
  );
}
function ExchangeSection({ exchanges, header }) {
  return (
    <AnchorWrapper id="exchanges">
      <Box sx={{ bg: "#FAFAFA", px: 3, py: "40px" }}>
        <DefaultList
          inverted={false}
          apps={exchanges}
          title={header.title}
          subtitle={header.description}
          cardType="exchange"
        />
      </Box>
    </AnchorWrapper>
  );
}

function CommunitySection({ communities, header }) {
  return (
    <AnchorWrapper id="communitytools">
      <Box sx={{ px: 3, py: "40px" }}>
        <DefaultList
          inverted={false}
          apps={communities}
          title={header.title}
          subtitle={header.description}
          cardType="community"
        />
      </Box>
    </AnchorWrapper>
  );
}

function extractData(tinaData) {
  return tinaData?.getEcosystemDocument?.data;
}

function Ecosystem({
  apps,
  web3,
  videos,
  communities,
  exchanges,
  staking,
  data,
  variables,
}) {
  const { t } = useTranslation(["home"]);
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });
  const pageData = extractData(tinaData);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "initial";
    };
  }, []);
  const headProps: HeadProps = {
    meta: {
      title: "Ecosystem",
      description: "Ecosystem",
      url: "https://livepeer.org",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/OG.png",
      twitterUsername: "@Livepeer",
    },
  };

  return (
    <PageLayout headProps={headProps} navProps={{ isInmersive: true }}>
      <Header hero={pageData.hero} />
      <Subnav data={pageData} />
      <Box
        sx={{
          background: "linear-gradient(#FFFFFF, #FAFAFA)",
          width: "100%",
          height: "80px",
        }}
      />
      {apps && <AppSection apps={apps} header={pageData.apps_section} />}
      {videos && (
        <VideoToolSection videos={videos} header={pageData.video_section} />
      )}
      {web3 && <Web3Section web3={web3} header={pageData.web3_section} />}
      {staking && (
        <StakingPlatformSection
          staking={staking}
          header={pageData.stacking_section}
        />
      )}
      {exchanges && (
        <ExchangeSection
          exchanges={exchanges}
          header={pageData.exchanges_section}
        />
      )}
      {communities && (
        <CommunitySection
          communities={communities}
          header={pageData.community_section}
        />
      )}
      <CtaBanner title={pageData.footer_cta_description} divider={true} />
    </PageLayout>
  );
}

function sortData(data) {
  const temp = data.filter((b) => b.node.data.publish);
  const finalData = temp.sort(
    (a, b) =>
      new Date(b.node.data.createdAt).getTime() -
      new Date(a.node.data.createdAt).getTime()
  );

  return finalData;
}

export async function getStaticProps({ locale }) {
  const appsData: any = await staticRequest({
    query: gql`
      query GetAppsList {
        getAppsList {
          edges {
            node {
              sys {
                filename
              }
              data {
                publish
                image
                title
                richtext
                website
                twitter
                discord
                linkedin
                telegram
                link
                createdAt
              }
            }
          }
        }
      }
    `,
  });
  const videosData: any = await staticRequest({
    query: gql`
      query GetVideosList {
        getVideosList {
          edges {
            node {
              sys {
                filename
              }
              data {
                publish
                image
                title
                richtext
                website
                createdAt
              }
            }
          }
        }
      }
    `,
  });
  const web3Data: any = await staticRequest({
    query: gql`
      query GetWeb3List {
        getWeb3List {
          edges {
            node {
              sys {
                filename
              }
              data {
                publish
                image
                title
                richtext
                website
                twitter
                discord
                linkedin
                telegram
                link
                createdAt
              }
            }
          }
        }
      }
    `,
  });
  const stakingData: any = await staticRequest({
    query: gql`
      query GetStakingList {
        getStakingList {
          edges {
            node {
              sys {
                filename
              }
              data {
                publish
                image
                title
                richtext
                website
                twitter
                discord
                linkedin
                telegram
                link
                createdAt
              }
            }
          }
        }
      }
    `,
  });
  const exchangeData: any = await staticRequest({
    query: gql`
      query GetExchangeList {
        getExchangeList {
          edges {
            node {
              sys {
                filename
              }
              data {
                publish
                image
                title
                richtext
                website
                twitter
                discord
                linkedin
                telegram
                link
                createdAt
              }
            }
          }
        }
      }
    `,
  });
  const communityRes: any = await staticRequest({
    query: gql`
      query GetComunityList {
        getComunityList {
          edges {
            node {
              sys {
                filename
              }
              data {
                publish
                image
                title
                richtext
                website
                createdAt
              }
            }
          }
        }
      }
    `,
  });

  const variables = { relativePath: `index.md` };

  const data = await staticRequest({
    query,
    variables,
  });

  const communities = sortData(communityRes?.getComunityList?.edges);
  const videos = sortData(videosData?.getVideosList?.edges);
  const exchanges = sortData(exchangeData?.getExchangeList?.edges);
  const staking = sortData(stakingData?.getStakingList?.edges);
  const web3 = sortData(web3Data?.getWeb3List?.edges);
  const apps = sortData(appsData?.getAppsList?.edges);

  return {
    props: {
      apps,
      web3,
      videos,
      communities,
      exchanges,
      staking,
      data,
      variables,
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
    revalidate: 1,
  };
}

export default Ecosystem;
