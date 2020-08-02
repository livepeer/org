/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Container, Section1, Section2, Section3, Title, Fees } from "./styles"
import Rewards from "../Rewards"

const Chapter7 = ({ data }) => {
  return (
    <Container>
      <Title>Rewarding Participation</Title>
      <Section1>
        <div
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              max-width: 330px;
              margin-bottom: 0;
              margin-right: 152px;
            }
          `}
        >
          <p>
            When a broadcaster pays fees into the network, both Orchestrators
            and Delegators earn a portion of those fees as a reward for ensuring
            a high-quality and secure network.
          </p>
        </div>
        <Fees src="/images/primer/fees.svg" />
      </Section1>
      <Section2>
        <div
          css={css`
            margin-bottom: 40px;
            @media (min-width: 1024px) {
              position: relative;
              margin-bottom: 0;
              margin-left: -370px;
              margin-right: 100px;
              min-width: 972px;
              min-height: 816px;
            }
          `}
        >
          <Rewards data={data} />
        </div>
        <div>
          <p>
            In addition to earning fees, Livepeer mints new token over time,
            much like Bitcoin and Ethereum block rewards, which are split
            amongst Delegators and Orchestrators in proportion to their total
            stake relative to others in the network.
          </p>
          <p>
            This has the effect of growing network ownership amongst those who
            participate and shrinking it amongst those who do not.{" "}
          </p>
          <p>
            It also gives Orchestrators a powerful economic advantage over
            traditional centralized video providers since the value of the token
            offsets what they need to charge broadcasters to break even. With
            traditional centralized video providers, they have to charge you
            their cost of service for transcoding and distributing video plus a
            margin.
          </p>
        </div>
      </Section2>
      <Section3>
        <p
          css={css`
            max-width: 370px;
            textalign: center;
          `}
        >
          Neat right? Next, let's go over how often new tokens are minted.
        </p>
      </Section3>
    </Container>
  )
}

export default Chapter7
