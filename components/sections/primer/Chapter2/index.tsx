import {
  Container,
  Title,
  List,
  Item,
  Header,
  Icon,
  Text,
  Body
} from "./styles"

const Chapter2 = () => {
  return (
    <Container>
      <Title>Who is Livepeer for?</Title>
      <List>
        <Item>
          <Header>
            <Icon src={"/images/primer/development.svg"} />
            <Text>Developers</Text>
          </Header>
          <Body>
            <p>
              who want to build applications that include live or on demand
              video can use Livepeer to power their video functionality.
            </p>
          </Body>
        </Item>
        <Item>
          <Header>
            <Icon src={"/images/primer/mobile-app.svg"} />
            <Text>Users</Text>
          </Header>
          <Body>
            <p>
              who want to stream video, gaming, coding, entertainment,
              educational courses, and other types of content can use
              applications built on Livepeer to do so.
            </p>
          </Body>
        </Item>
        <Item>
          <Header>
            <Icon src={"/images/primer/twitch.svg"} />
            <Text>Broadcasters</Text>
          </Header>
          <Body>
            <p>
              such as Twitch who have large audiences and high streaming bills
              or infrastructure costs can use Livepeer to reduce costs or
              infrastructure overhead.
            </p>
          </Body>
        </Item>
      </List>
    </Container>
  )
}

export default Chapter2
