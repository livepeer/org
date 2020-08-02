import styled from "@emotion/styled"

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 94px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    padding: 0,
    margin: "0 auto 200px"
  }
})

export const Title = styled.h2({
  transform: "rotate(-3deg)",
  fontSize: "48px",
  textAlign: "center",
  lineHeight: "50px",
  fontWeight: 100,
  textTransform: "uppercase",
  marginBottom: "48px",
  ["@media (min-width: 1024px)"]: {
    fontSize: "54px",
    lineHeight: "56px",
    marginBottom: "80px"
  }
})

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
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
    marginBottom: 120
  }
})

export const Section3 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 136
  }
})

export const Section4 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row"
  }
})

export const Heading = styled.h3({
  fontSize: "28px",
  lineHeight: "38px",
  marginBottom: "16px"
})

export const Body = styled.div({
  width: "100%",
  ["@media (min-width: 1024px)"]: {
    maxWidth: "320px"
  }
})

export const Alice = styled.img({
  width: "80%",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "initial",
    marginRight: "160px",
    marginBottom: 0
  }
})

export const Bob = styled.img({
  width: "80%",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    width: "initial",
    marginRight: "160px",
    marginBottom: 0
  }
})

export const Devices = styled.img({
  width: "100%",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    marginBottom: 0,
    position: "relative",
    width: "auto",
    marginLeft: "-270px",
    marginRight: "100px"
  }
})

export const Actors = styled.img({
  width: "100%",
  ["@media (min-width: 1024px)"]: {
    width: "auto"
  }
})
