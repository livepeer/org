import styled from "@emotion/styled"

export const Container = styled.div({
  maxWidth: "1024px",
  margin: "0 auto 136px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    margin: "0 auto 240px",
    padding: 0
  }
})

export const Title = styled.h2({
  transform: "rotate(-6deg)",
  fontSize: "48px",
  fontWeight: "lighter",
  textAlign: "center",
  lineHeight: "50px",
  textTransform: "uppercase",
  marginBottom: "48px",
  ["@media (min-width: 1024px)"]: {
    fontSize: "54px",
    lineHeight: "56px",
    marginBottom: "120px"
  }
})

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row"
  }
})

export const Ethereum = styled.img({
  width: "100%",
  ["@media (min-width: 1024px)"]: {
    width: "auto"
  }
})

export const Text = styled.div({
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "400px",
    marginBottom: 0
  }
})
