import { useState } from "react";
import { Box } from "theme-ui";
import { Element } from "react-scroll";
import PageLayout from "components/layouts/primer";
import { HeadProps } from "components/primitives/head";
import Masthead from "components/sections/primer/Masthead";
import Introduction from "components/sections/primer/Introduction";
import Chapter1 from "components/sections/primer/Chapter1";
import Chapter2 from "components/sections/primer/Chapter2";
import Chapter3 from "components/sections/primer/Chapter3";
import Chapter4 from "components/sections/primer/Chapter4";
import Chapter5 from "components/sections/primer/Chapter5";
import Chapter6 from "components/sections/primer/Chapter6";
import Chapter7 from "components/sections/primer/Chapter7";
import Chapter8 from "components/sections/primer/Chapter8";
import Chapter9 from "components/sections/primer/Chapter9";
import Footer from "components/sections/primer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  getTotalDelegators,
  getProtocolStatistics,
} from "lib/document-helpers";

const Primer = ({ data }) => {
  const { t } = useTranslation(["primer"]);
  const { locale } = useRouter();
  const [section, setActiveSection] = useState("introduction");
  const onChange = (section) => {
    setActiveSection(section);
  };

  const headProps: HeadProps = {
    meta: {
      title: t("page-primer-meta-title"),
      description: t("page-primer-meta-description"),
      url: "https://livepeer.org/primer",
      siteName: "Livepeer.org",
      image: "https://livepeer.org/images/primer/share-image.jpg",
      twitterUsername: "@LivepeerOrg",
    },
  };

  return (
    <PageLayout
      navProps={{ background: "translucent", isInmersive: true }}
      headProps={headProps}>
      <Box
        className="primer"
        sx={{
          // agrandir doesn't support cyrillic so we use another sans font instead
          fontFamily: locale === "ru" ? "Helvetica, sans-serif" : "agrandir",
          "h1, h2, h3, h4, h5, h6": {
            fontFamily: locale === "ru" ? "Helvetica, sans-serif" : "agrandir",
          },
        }}>
        <Box className={`bg ${section}`} />
        <Element name="top" />
        <Box id="containerElement" style={{ position: "relative", zIndex: 10 }}>
          <Masthead title={t("page-primer-title")} />
          <Element name="introduction">
            <Introduction onChange={() => onChange("introduction")} />
          </Element>
          <Element name="chapter1">
            <Chapter1 onChange={() => onChange("chapter1")} />
          </Element>
          <Element name="chapter2">
            <Chapter2 />
          </Element>
          <Element name="chapter3">
            <Chapter3 onChange={() => onChange("chapter3")} />
          </Element>
          <Element name="chapter4">
            <Chapter4 onChange={() => onChange("chapter4")} />
          </Element>
          <Element name="chapter5">
            <Chapter5 onChange={() => onChange("chapter5")} />
          </Element>
          <Element name="chapter6">
            <Chapter6 />
          </Element>
          <Element name="chapter7">
            <Chapter7 data={data} />
          </Element>
          <Element name="chapter8">
            <Chapter8 data={data} onChange={() => onChange("chapter8")} />
          </Element>
          <Element name="chapter9">
            <Chapter9 data={data} onChange={() => onChange("chapter9")} />
          </Element>
          <Footer />
        </Box>
      </Box>
    </PageLayout>
  );
};

export async function getStaticProps({ locale }) {
  let totalDelegators = await getTotalDelegators();
  let {
    inflation,
    inflationChange,
    totalSupply,
    totalActiveStake,
    targetBondingRate,
    participationRate,
  } = await getProtocolStatistics();

  let ethGasStationResponse = await fetch(
    "https://ethgasstation.info/json/ethgasAPI.json"
  );
  let { block_time } = await ethGasStationResponse.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "primer", "home"])),
      locale,
      data: {
        totalSupply: Intl.NumberFormat(locale, {
          maximumFractionDigits: 2,
        }).format(+totalSupply),
        totalDelegators: Intl.NumberFormat(locale, {
          maximumFractionDigits: 2,
        }).format(+totalDelegators),
        inflation: Intl.NumberFormat(locale, {
          maximumFractionDigits: 10,
        }).format(inflation / 10000000),
        inflationChange: Intl.NumberFormat(locale, {
          maximumFractionDigits: 10,
        }).format(inflationChange / 10000000),
        totalBonded: Intl.NumberFormat(locale, {
          maximumFractionDigits: 2,
        }).format(+totalActiveStake),
        targetBondingRate: Intl.NumberFormat(locale, {
          maximumFractionDigits: 2,
        }).format(targetBondingRate / 10000000),
        participationRate: Intl.NumberFormat(locale, {
          maximumFractionDigits: 2,
        }).format(participationRate * 100),
        mintableTokens: Intl.NumberFormat(locale, {
          maximumFractionDigits: 2,
        }).format((inflation / 1000000000) * totalSupply),
        hoursPerRound: Intl.NumberFormat(locale, {
          maximumFractionDigits: 2,
        }).format((block_time * 5760) / 60 / 60),
        blockTime: Intl.NumberFormat(locale, {
          maximumFractionDigits: 2,
        }).format(block_time),
      },
    },
    revalidate: 1,
  };
}

export default Primer;
