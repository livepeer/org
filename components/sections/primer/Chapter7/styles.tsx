import styled from "@emotion/styled"

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 94px",
  padding: "0 24px",
  overflow: "hidden",
  ["@media (min-width: 1024px)"]: {
    overflow: "initial",
    padding: 0,
    margin: "0 auto 160px"
  }
})

export const Title = styled.h2({
  transform: "rotate(3deg)",
  fontSize: "38px",
  textAlign: "center",
  lineHeight: "48px",
  fontWeight: 100,
  position: "relative",
  textTransform: "uppercase",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    marginBottom: 80,
    fontSize: "54px",
    lineHeight: "56px"
  }
})

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    marginBottom: 120,
    flexDirection: "row"
  }
})

export const Section2 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: "120px"
  }
})

export const Section3 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row"
  }
})

export const Fees = styled.img({
  width: "100%",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 0
  }
})
