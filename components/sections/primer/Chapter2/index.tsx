import { useTranslation } from "next-i18next";
import {
  Container,
  Title,
  List,
  Item,
  Header,
  Icon,
  Text,
  Body,
} from "./styles";

const Chapter2 = () => {
  // eslint-disable-next-line no-undef
  const { t } = useTranslation(["primer"]);

  return (
    <Container>
      <Title>{t("page-primer-contents-who")}</Title>
      <List>
        <Item>
          <Header>
            <Icon src={"/images/primer/development.svg"} />
            <Text>{t("page-primer-contents-who-h3-one")}</Text>
          </Header>
          <Body>
            <p>{t("page-primer-contents-who-text-one")}</p>
          </Body>
        </Item>
        <Item>
          <Header>
            <Icon src={"/images/primer/mobile-app.svg"} />
            <Text>{t("page-primer-contents-who-h3-two")}</Text>
          </Header>
          <Body>
            <p>{t("page-primer-contents-who-text-two")}</p>
          </Body>
        </Item>
        <Item>
          <Header>
            <Icon src={"/images/primer/twitch.svg"} />
            <Text>{t("page-primer-contents-who-h3-three")}</Text>
          </Header>
          <Body>
            <p>{t("page-primer-contents-who-text-three")}</p>
          </Body>
        </Item>
      </List>
    </Container>
  );
};

export default Chapter2;
