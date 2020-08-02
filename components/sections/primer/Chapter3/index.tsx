/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
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
  Actors
} from "./styles"

const threshold = [0.1]

const Chapter3 = ({ onChange }) => {
  const [ref, inView, entry] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      onChange()
    }
  }, [inView])

  return (
    <Container ref={ref}>
      <Title>How Does Livepeer Work?</Title>
      <Section1
        css={css`
          margin-bottom: 40px;
          @media (min-width: 1024px) {
            margin-bottom: 24px;
          }
        `}
      >
        <Alice src="/images/primer/alice.svg" />
        <Body
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              margin-bottom: 0;
            }
          `}
        >
          <Heading>Meet Alice</Heading>
          <p>
            Alice is an app developer. She's using Livepeer to add live video
            streaming capabilities to an app she's building for high schools
            that want to broadcast their team's sporting events.
          </p>
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
          `}
        >
          <Heading>Meet Bob</Heading>
          <p>
            Bob is an event coordinator in charge of broadcasting his high
            school's basketball games using Alice’s app.
          </p>
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
          `}
        >
          <p>
            When Bob opens the app and taps "Record" at the start of each game,
            the app sends the live video along with broadcaster fees into the
            Livepeer network. Livepeer then transcodes the video into all the
            formats and bitrates that his viewers can consume.
          </p>

          <p>
            Today is a really important broadcast for Bob. It's the championship
            game! How can Alice be sure that the live streaming experience will
            be high-quality for Bob's viewers?
          </p>
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
          `}
        >
          <p>
            There are two key actors in the Livepeer network that ensure the
            quality of the live stream. Orchestrators and Delegators.
          </p>

          <p>First, let's go over the role of Orchestrators.</p>
        </Body>
        <Actors src="/images/primer/actors.svg" />
      </Section4>
    </Container>
  )
}

export default Chapter3
