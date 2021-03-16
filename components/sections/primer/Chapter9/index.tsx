/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

import {
  Container,
  Section,
  Heading,
  Button,
  Title,
  List,
  Header,
  Item,
  Icon,
  Flowers,
} from "./styles";
import { useTranslation } from "next-i18next";

const threshold = [0.3];

const Chapter9 = ({ onChange, data }) => {
  const { t } = useTranslation(["primer", "home"]);
  const [ref, inView, entry] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      onChange();
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <Title>{t("page-primer-contents-involved-h2")}</Title>
      <Section>
        <div
          css={css`
            @media (min-width: 1024px) {
              max-width: 330px;
              margin-right: 80px;
            }
          `}>
          <p
            dangerouslySetInnerHTML={{
              __html: t("page-primer-contents-involved-text-one", {
                interpolation: { escapeValue: false },
                totalDelegators: data.totalDelegators,
              }),
            }}
          />
        </div>
        <Flowers src="/images/primer/growing.svg" />
      </Section>
      <Section>
        <List>
          <Item>
            <Header>
              <Icon src={"/images/primer/wallet.svg"} />
            </Header>
            <Heading>{t("page-primer-contents-involved-interested")}</Heading>
            <p>{t("page-primer-contents-involved-interested-text-one")}</p>
            <Link href="/resources?filter=exchange#tabs" passHref>
              <Button style={{ marginBottom: 32 }}>
                {t("page-primer-contents-involved-interested-cta-one")}
              </Button>
            </Link>
            <p>{t("page-primer-contents-involved-interested-text-two")}</p>
            <Button
              href="https://explorer.livepeer.org/"
              target="_blank"
              rel="noopener noreferrer">
              {t("page-primer-contents-involved-interested-cta-two")}
            </Button>
          </Item>
          <Item>
            <Header>
              <Icon src={"/images/primer/video.svg"} />
            </Header>
            <Heading>{t("page-primer-contents-involved-engineer")}</Heading>
            <p>{t("home:page-home-developers-text")}</p>
            <Link href="/developers" passHref>
              <Button>{t("page-primer-contents-involved-miner-cta")}</Button>
            </Link>
          </Item>
          <Item>
            <Header>
              <Icon src={"/images/primer/pick.svg"} />
            </Header>
            <Heading>{t("page-primer-contents-involved-miner")}</Heading>
            <p>{t("page-primer-contents-involved-miner-text")}</p>
            <Link href="/video-miners" passHref>
              <Button>{t("page-primer-contents-involved-miner-cta")}</Button>
            </Link>
          </Item>
        </List>
      </Section>
    </Container>
  );
};

export default Chapter9;
