/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Container,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  PieChart,
  TranscodingIn,
  TranscodingOut,
  TranscoderRunning,
  Scissors,
} from "./styles";

const threshold = [0.1];

const Introduction = ({ onChange }) => {
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <Container>
        <Section1>
          <PieChart src="/images/primer/pie-chart.svg" />
          <div
            css={css`
              margin-bottom: 40px;
              @media (min-width: 1024px) {
                margin-bottom: 0;
              },
            `}>
            <h3 className="primer__heading">
              {t("page-primer-contents-intro-h3")}
            </h3>
            <p>{t("page-primer-contents-intro-text-one")}</p>
          </div>
        </Section1>
        <Section2>
          <div
            css={css`
              margin-bottom: 40px;
              @media (min-width: 1024px) {
                min-width: 340px;
                margin-right: 120px;
                margin-bottom: 0;
              },
            `}>
            <p>{t("page-primer-contents-intro-text-two")}</p>
            <p>{t("page-primer-contents-intro-text-three")}</p>
          </div>
          <TranscodingIn src="/images/primer/transcoding-in.svg" />
        </Section2>
        <Section3>
          <TranscodingOut src="/images/primer/transcoder-pickup.svg" />
          <div
            css={css`
              @media (min-width: 1024px) {
                margin-top: 0;
                max-width: 330px;
                margin-right: 40px;
                margin-bottom: 0;
              },
            `}>
            <p>{t("page-primer-contents-intro-text-four")}</p>
          </div>
        </Section3>
        <Section4>
          <div
            css={css`
              @media (min-width: 1024px) {
                max-width: 420px;
                margin-top: 136px;
              },
            `}>
            <p>{t("page-primer-contents-intro-text-five")}</p>
          </div>
          <TranscoderRunning src="/images/primer/transcoder-running.svg" />
        </Section4>
        <Section5>
          <Scissors src="/images/primer/scissors.svg" />
          <div
            css={css`
              margin-bottom: 40px;
              @media (min-width: 1024px) {
                margin-top: 80px;
                margin-bottom: 0;
              }
            `}>
            <p>{t("page-primer-contents-intro-text-six")}</p>
            <p>{t("page-primer-contents-intro-text-seven")}</p>
          </div>
        </Section5>
        <Section6>
          <div>
            <p>{t("page-primer-contents-intro-text-eight")}</p>
          </div>
        </Section6>
      </Container>
    </div>
  );
};

export default Introduction;
