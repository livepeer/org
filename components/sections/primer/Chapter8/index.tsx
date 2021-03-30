/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Container,
  Section1,
  Section2,
  Section3,
  Title,
  Heading,
  MobileTitle,
  Rounds,
  RoundMobile,
} from "./styles";
import Gauge from "../Gauge";
import { useTranslation } from "next-i18next";

const threshold = [0.3];

const Chapter8 = ({ data, onChange }) => {
  const translationData = {
    interpolation: { escapeValue: false },
    ethereumBlocksPerRound: "5760",
    blockTime: data.blockTime,
    hoursPerRound: data.hoursPerRound,
    inflation: data.inflation,
    totalSupply: data.totalSupply,
    mintableTokens: data.mintableTokens,
    totalStaked: data.totalBonded,
    participationRate: data.participationRate,
    targetRate: data.targetBondingRate,
    inflationChange: data.inflationChange,
  };
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <MobileTitle>{t("page-primer-contents-rounds")}</MobileTitle>
      <Section1>
        <div
          css={css`
            @media (min-width: 1024px) {
              max-width: 500px;
            }
          `}>
          <Title>{t("page-primer-contents-rounds")}</Title>
          <Heading>{t("page-primer-contents-rounds-h3-one")}</Heading>
          <p
            css={css`
              @media (min-width: 1024px) {
                margin-bottom: 40px;
              }
            `}
            dangerouslySetInnerHTML={{
              __html: t(
                "page-primer-contents-rounds-text-one",
                translationData
              ),
            }}
          />
          <p>{t("page-primer-contents-rounds-text-two")}</p>
        </div>
        <Rounds src="/images/primer/rounds.svg" />
        <RoundMobile src="/images/primer/rounds-mobile.svg" />
      </Section1>
      <Section2>
        <div
          css={css`
            @media (min-width: 1024px) {
              margin-right: 120px;
            }
          `}>
          <Gauge data={data} />
        </div>
        <div
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              max-width: 500px;
              margin-bottom: 0;
            }
          `}>
          <Heading>{t("page-primer-contents-rounds-h3-two")}</Heading>
          <p
            dangerouslySetInnerHTML={{
              __html: t(
                "page-primer-contents-rounds-text-three",
                translationData
              ),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t(
                "page-primer-contents-rounds-text-four",
                translationData
              ),
            }}
          />
        </div>
      </Section2>
      <Section3>
        <p
          css={css`
            @media (min-width: 1024px) {
              max-width: 470px;
              text-align: center;
            }
          `}
          dangerouslySetInnerHTML={{
            __html: t("page-primer-contents-rounds-text-five", translationData),
          }}
        />
      </Section3>
    </Container>
  );
};

export default Chapter8;
