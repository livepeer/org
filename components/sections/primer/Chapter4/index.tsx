/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Container, Section, Title, Orchestration } from "./styles"

const threshold = [0.2]

const Chapter4 = ({ onChange }) => {
  const [ref, inView, entry] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      onChange()
    }
  }, [inView])

  return (
    <Container ref={ref}>
      <Title>Orchestrators</Title>
      <Section>
        <div
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              max-width: 570px;
              margin-bottom: 80px;
            }
          `}
        >
          <p>
            In Livepeer, anyone can join the network and become what's known as
            an "Orchestrator" by running software that allows you to contribute
            your computer's resources (CPU, GPU, and bandwidth) in service of
            transcoding and distributing video for paying broadcasters and
            developers like Alice.
          </p>
          <p>
            For doing so, you earn fees in the form of a cryptocurrency like ETH
            or a stablecoin pegged to the US dollar like DAI.
          </p>
        </div>
        <Orchestration src="/images/primer/orchestration.svg" />
        <div
          css={css`
            @media (min-width: 1024px) {
              max-width: 570px;
            }
          `}
        >
          <p>
            Sounds good, right? But wait, there's a catch! In order to earn the
            right to do this type of work on the network, you must first earn or
            acquire Livepeer Token, also known as LPT.
          </p>
        </div>
      </Section>
    </Container>
  )
}

export default Chapter4
