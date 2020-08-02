/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

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
  Flowers
} from "./styles"

const threshold = [0.3]

const Chapter9 = ({ onChange, data }) => {
  const [ref, inView, entry] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      onChange()
    }
  }, [inView])

  return (
    <Container ref={ref}>
      <Title>Livepeer is Growing!</Title>
      <Section>
        <div
          css={css`
            @media (min-width: 1024px) {
              max-width: 330px;
              margin-right: 80px;
            }
          `}
        >
          <p>
            Today, there are{" "}
            <strong>{data.totalDelegators.toLocaleString()}</strong> delegators
            securing the network, with more and more participants joining the
            network every day.
          </p>
        </div>
        <Flowers src="/images/primer/growing.svg" />
      </Section>
      <Section>
        <List>
          <Item>
            <Header>
              <Icon src={"/images/primer/wallet.svg"} />
            </Header>
            <Heading>Interested in participating?</Heading>
            <p>Get Livepeer token</p>
            <Link href="/resources?filter=exchange#tabs" passHref>
              <Button style={{ marginBottom: 32 }}>Get Token</Button>
            </Link>
            <p>Stake token towards an Orchestrator</p>
            <Button
              href="https://explorer.livepeer.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stake Livepeer
            </Button>
          </Item>
          <Item>
            <Header>
              <Icon src={"/images/primer/video.svg"} />
            </Header>
            <Heading>Are you a video engineer?</Heading>
            <p>Sign up here for the API beta</p>
            <Button
              href="https://livepeer.com/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </Button>
          </Item>
          <Item>
            <Header>
              <Icon src={"/images/primer/pick.svg"} />
            </Header>
            <Heading>Are you a cryptocurrency miner?</Heading>
            <p>
              Learn how you can earn additional income on Livepeer's open
              marketplace by renting out the idle capacity on your GPU mining
              rig.
            </p>
            <Link href="/video-miners" passHref>
              <Button>Learn More</Button>
            </Link>
          </Item>
        </List>
      </Section>
    </Container>
  )
}

export default Chapter9
