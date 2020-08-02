import styled from "@emotion/styled"

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 94px",
  padding: "0 24px",
  overflow: "hidden",
  ["@media (min-width: 1024px)"]: {
    padding: "24px 0 0 0",
    overflow: "initial",
    margin: "0 auto 200px"
  }
})

export const Title = styled.h2({
  transform: "rotate(-3deg)",
  fontSize: "28px",
  textAlign: "center",
  lineHeight: "40px",
  fontWeight: 100,
  textTransform: "uppercase",
  marginBottom: "48px",
  ["@media (min-width: 1024px)"]: {
    fontSize: "54px",
    lineHeight: "56px",
    marginBottom: "80px"
  }
})

export const Section = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
})

export const Orchestration = styled.img({
  width: "100%",
  marginBottom: 40,
  transform: "scale(1.7)",
  padding: "80px 0",
  ["@media (min-width: 1024px)"]: {
    marginBottom: 80,
    padding: 0,
    transform: "initial"
  }
})
