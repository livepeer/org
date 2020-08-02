import styled from "@emotion/styled"

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 94px",
  padding: "0 24px",
  overflow: "hidden",
  ["@media (min-width: 1024px)"]: {
    overflow: "initial",
    padding: 0,
    margin: "0 auto 200px"
  }
})

export const MobileTitle = styled.h2({
  transform: "rotate(-3deg)",
  fontSize: "38px",
  textAlign: "center",
  lineHeight: "58px",
  fontWeight: 100,
  textTransform: "uppercase",
  marginBottom: "48px",
  ["@media (min-width: 1024px)"]: {
    display: "none"
  }
})

export const Title = styled.h2({
  transform: "rotate(-3deg)",
  fontSize: "38px",
  textAlign: "center",
  lineHeight: "48px",
  fontWeight: 100,
  textTransform: "uppercase",
  marginBottom: "48px",
  display: "none",
  ["@media (min-width: 1024px)"]: {
    display: "block",
    fontSize: "54px",
    lineHeight: "56px",
    marginBottom: "80px"
  }
})

export const Section = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row"
  }
})

export const Staking = styled.img({
  width: "140%",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    marginBottom: 0,
    width: "auto",
    position: "relative",
    left: "-160px"
  }
})
