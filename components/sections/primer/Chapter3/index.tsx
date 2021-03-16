/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  Container,
  Title,
  Section1,
  Section2,
  Section3,
  Section4,
  Heading,
  Body,
  Alice,
  Bob,
  Devices,
  Actors,
} from "./styles";

const threshold = [0.1];

const Chapter3 = ({ onChange }) => {
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Title>{t("page-primer-contents-how")}</Title>
      <Section1
        css={css`
          margin-bottom: 40px;
          @media (min-width: 1024px) {
            margin-bottom: 24px;
          }
        `}>
        <Alice src="/images/primer/alice.svg" />
        <Body
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              margin-bottom: 0;
            }
          `}>
          <Heading>{t("page-primer-contents-how-h3-one")}</Heading>
          <p>{t("page-primer-contents-how-text-one")}</p>
        </Body>
      </Section1>
      <Section2>
        <Body
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              margin-right: 160px;
              margin-bottom: 0;
            }
          `}>
          <Heading>{t("page-primer-contents-how-h3-two")}</Heading>
          <p>{t("page-primer-contents-how-text-two")}</p>
        </Body>
        <Bob src="/images/primer/bob.svg" />
      </Section2>
      <Section3>
        <Devices src="/images/primer/devices.svg" />
        <Body
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              margin-bottom: 0;
            }
          `}>
          <p>{t("page-primer-contents-how-text-three")}</p>

          <p>{t("page-primer-contents-how-text-four")}</p>
        </Body>
      </Section3>
      <Section4>
        <Body
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              margin-right: 80px;
              margin-bottom: 0;
            }
          `}>
          <p>{t("page-primer-contents-how-text-five")}</p>

          <p>{t("page-primer-contents-how-text-six")}</p>
        </Body>
        <Actors src="/images/primer/actors.svg" />
      </Section4>
    </Container>
  );
};

export default Chapter3;
