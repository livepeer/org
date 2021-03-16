/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useTranslation } from "next-i18next";
import { Container, Section, Title, MobileTitle, Staking } from "./styles";

const Chapter6 = () => {
  const { t } = useTranslation(["primer"]);

  return (
    <Container>
      <MobileTitle>{t("page-primer-contents-delegators")}</MobileTitle>
      <Section>
        <Staking src="/images/primer/staking.svg" />
        <div
          css={css`
            @media (min-width: 1024px) {
              min-width: 440px !important;
            }
          `}>
          <Title>{t("page-primer-contents-delegators")}</Title>
          <p
            css={css`
              margin-bottom: 56px;
              @media (min-width: 1024px) {
                margin-bottom: 80px;
              }
            `}>
            {t("page-primer-contents-delegators-text-one")}
          </p>
          <p
            css={css`
              font-size: 28px;
              line-height: 38px;
            `}>
            {t("page-primer-contents-delegators-text-two")}
          </p>
        </div>
      </Section>
    </Container>
  );
};

export default Chapter6;
