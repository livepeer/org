/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { Container, Section, Title, MobileTitle, Staking } from "./styles"

const Chapter6 = () => {
  return (
    <Container>
      <MobileTitle>Delegators</MobileTitle>
      <Section>
        <Staking src="/images/primer/staking.svg" />
        <div
          css={css`
            @media (min-width: 1024px) {
              max-width: 440px;
            }
          `}
        >
          <Title>Delegators</Title>
          <p
            css={css`
              margin-bottom: 56px;
              @media (min-width: 1024px) {
                margin-bottom: 80px;
              }
            `}
          >
            Delegators are Livepeer tokenholders who participate in the network
            by "staking" their tokens towards Orchestrators who they believe are
            doing good and honest work. You can think about staking like putting
            a deposit down. When you stake, your tokens become locked up for a
            period of time and then you can take them back or stake them to a
            different Orchestrator. Doing this helps ensure that the network is
            more secure.
          </p>
          <p
            css={css`
              font-size: 28px;
              line-height: 38px;
            `}
          >
            You may be wondering, why would a tokenholder stake their tokens?
            What's in it for them?
          </p>
        </div>
      </Section>
    </Container>
  )
}

export default Chapter6
