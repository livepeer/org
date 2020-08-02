/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Root, Container, Section, Title } from "./styles"

const threshold = [0.1]

const Chapter5 = ({ onChange }) => {
  const [ref, inView, entry] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      onChange()
    }
  }, [inView])

  return (
    <Root ref={ref}>
      <Container>
        <Title>Livepeer Tokens</Title>
        <Section>
          <div
            css={css`
              @media (min-width: 1024px) {
                max-width: 472px;
                margin-bottom: 80px;
              }
            `}
          >
            <p>
              The purpose of the Livepeer token (LPT) is to coordinate,
              bootstrap, and incentivize participants to make sure the Livepeer
              network is as cheap, effective, secure, reliable and useful as
              possible. In the Livepeer protocol, LPT is required to perform the
              work of transcoding and distributing video on the network. The
              more LPT you own, the more work you're able to perform on the
              network in exchange for fees. As the network's usage grows, so
              does the demand for orchestrators and thus LPT.
            </p>
            <p>
              Of course, not everyone has the expertise required to perform the
              job of an Orchestrator. It requires serious technical knowledge
              and can be a full-time job. What if you're a Livepeer tokenholder
              but don't have the time or expertise to run the necessary
              infrastructure 24x7?
            </p>
            <p>
              There's another set of actors in the Livepeer protocol who play a
              less active albeit equally important role within the protocol —
              Livepeer Delegators.
            </p>
          </div>
        </Section>
      </Container>
    </Root>
  )
}

export default Chapter5
