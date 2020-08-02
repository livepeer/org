import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Container, Section1, Title, Text, Ethereum } from "./styles"

const threshold = [0.5]

const Chapter1 = ({ onChange }) => {
  const [ref, inView, entry] = useInView({ threshold })

  useEffect(() => {
    if (inView) {
      onChange()
    }
  }, [inView])

  return (
    <Container ref={ref}>
      <Title>What is Livepeer?</Title>
      <Section1>
        <Text>
          <p>
            Livepeer is a scalable Platform as a Service for developers who want
            to add live or on-demand video to their project. It aims to increase
            the reliability of video streaming while reducing costs associated
            with it by up to 50x.
          </p>
          <p>
            To achieve this Livepeer is building p2p infrastructure that
            interacts through a marketplace secured by the Ethereum blockchain.
          </p>
        </Text>
        <Ethereum src="/images/primer/livepeer-ethereum.svg" />
      </Section1>
    </Container>
  )
}

export default Chapter1
