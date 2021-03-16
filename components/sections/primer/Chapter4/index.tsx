/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Section, Title, Orchestration } from "./styles";

const threshold = [0.2];

const Chapter4 = ({ onChange }) => {
  const { t } = useTranslation(["primer"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Title>{t("page-primer-contents-orchestrators")}</Title>
      <Section>
        <div
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              max-width: 570px;
              margin-bottom: 80px;
            }
          `}>
          <p>{t("page-primer-contents-orchestrators-text-one")}</p>
          <p>{t("page-primer-contents-orchestrators-text-two")}</p>
        </div>
        <Orchestration src="/images/primer/orchestration.svg" />
        <div
          css={css`
            @media (min-width: 1024px) {
              max-width: 570px;
            }
          `}>
          <p>{t("page-primer-contents-orchestrators-text-three")}</p>
        </div>
      </Section>
    </Container>
  );
};

export default Chapter4;
