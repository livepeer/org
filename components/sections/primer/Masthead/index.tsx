import { Root, Container, Body, Heading, Subheading, Arrow } from "./styles"

const Masthead = () => {
  return (
    <Root>
      <Container>
        <Body>
          <Subheading>A 10-Minute Primer</Subheading>
          <Heading>
            <img
              src="/images/primer/livepeer-letters.svg"
              width="600"
              height="358"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: 550,
                color: "#FFA3A3",
                minWidth: "100%"
              }}
            />
          </Heading>
        </Body>
        <Arrow>
          <svg viewBox="0 0 22 14">
            <polyline
              fill="none"
              points="1,2 11,12 21,2"
              stroke="black"
              strokeMiterlimit="10"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </Arrow>
      </Container>
    </Root>
  )
}

export default Masthead
