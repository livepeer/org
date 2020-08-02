/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import {
  Container,
  Section1,
  Section2,
  Section3,
  Title,
  Heading,
  MobileTitle,
  Rounds,
  RoundMobile
} from "./styles"
import Gauge from "../Gauge"

const threshold = [0.3]

const Chapter8 = ({ data, onChange }) => {
  const [ref, inView, entry] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      onChange()
    }
  }, [inView])

  return (
    <Container ref={ref}>
      <MobileTitle>Rounds & Inflation</MobileTitle>
      <Section1>
        <div
          css={css`
            @media (min-width: 1024px) {
              max-width: 500px;
            }
          `}
        >
          <Title>Rounds & Inflation</Title>
          <Heading>Rounds</Heading>
          <p
            css={css`
              @media (min-width: 1024px) {
                margin-bottom: 40px;
              }
            `}
          >
            In Livepeer, new tokens are minted every so-called round. Rounds are
            measured in Ethereum blocks, where one round is equal to{" "}
            <strong>5760</strong> Ethereum blocks. In Ethereum, one block is
            mined on average every <strong>{data.blockTime.toFixed(2)}</strong>{" "}
            seconds, which means one Livepeer round lasts roughly{" "}
            <strong>{((data.blockTime * 5760) / 60 / 60).toFixed(2)}</strong>{" "}
            hours. Assuming the Orchestrator you're staked to is doing its job,
            this is how often you can expect to receive reward tokens.
          </p>
          <p>
            Next, let's go over the Livepeer inflation rate, or in other words,
            the way by which the Livepeer protocol determines how many new
            tokens to mint each round.
          </p>
        </div>
        <Rounds src="/images/primer/rounds.svg" />
        <RoundMobile src="/images/primer/rounds-mobile.svg" />
      </Section1>
      <Section2>
        <div
          css={css`
            @media (min-width: 1024px) {
              margin-right: 120px;
            }
          `}
        >
          <Gauge data={data} />
        </div>
        <div
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              max-width: 500px;
              margin-bottom: 0;
            }
          `}
        >
          <Heading>Inflation</Heading>
          <p>
            The current rate of inflation as of today's round is{" "}
            <strong>{data.inflationPerRound}%</strong> and there are currently a
            total of <strong>{data.totalSupply.toLocaleString()}</strong>{" "}
            Livepeer tokens in supply. So, if you do the math, a total of{" "}
            <strong>
              {(
                (parseFloat(data.inflationPerRound) / 100.0) *
                data.totalSupply
              ).toLocaleString()}{" "}
            </strong>
            newly minted Livepeer tokens will be rewarded to all participants
            during the next round.
          </p>

          <p>
            The cool thing about Livepeer is the inflation rate adjusts
            automatically depending on how many tokens are staked out of the
            total circulating supply. Currently, the total supply of Livepeer
            tokens stands at{" "}
            <strong>{data.totalSupply.toLocaleString()}</strong> and of those,{" "}
            <strong>{data.totalBonded.toLocaleString()}</strong> are staked.
            Livepeer refers to this ratio (
            <strong>{data.participationRate}%</strong>) as its "participation
            rate”.
          </p>
        </div>
      </Section2>
      <Section3>
        <p
          css={css`
            @media (min-width: 1024px) {
              max-width: 470px;
              text-align: center;
            }
          `}
        >
          Livepeer presupposes that a target rate of <strong>50%</strong> is a
          healthy trade-off between network security and token liquidity, so in
          order to hit this target, the protocol incentivizes participation by
          increasing the inflation rate by <strong>0.0003%</strong> for every
          round the participation rate is below <strong>50%</strong> and
          decreasing it <strong>0.0003%</strong> for every round the
          participation rate is above <strong>50%</strong>.
        </p>
      </Section3>
    </Container>
  )
}

export default Chapter8
