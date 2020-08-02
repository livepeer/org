import styled from "@emotion/styled"

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 94px",
  padding: "20px 24px 0",
  ["@media (min-width: 1024px)"]: {
    padding: 0,
    margin: "0 auto 200px"
  }
})

export const Title = styled.h2({
  transform: "rotate(-3deg)",
  fontWeight: 100,
  position: "relative",
  textTransform: "uppercase",
  marginBottom: 40,
  display: "none",
  ["@media (min-width: 1024px)"]: {
    fontSize: "54px",
    lineHeight: "56px",
    display: "block"
  }
})

export const MobileTitle = styled.h2({
  transform: "rotate(-3deg)",
  fontSize: "48px",
  textAlign: "center",
  lineHeight: "50px",
  fontWeight: 100,
  textTransform: "uppercase",
  marginBottom: "48px",
  ["@media (min-width: 1024px)"]: {
    display: "none"
  }
})

export const Section1 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 80
  }
})

export const Section2 = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
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
    marginBottom: 80
  }
})

export const Rounds = styled.img({
  width: "100%",
  marginBottom: 40,
  display: "none",
  ["@media (min-width: 1024px)"]: {
    display: "block",
    marginBottom: 0,
    width: "auto",
    position: "relative",
    right: "-160px"
  }
})

export const RoundMobile = styled.img({
  width: "100%",
  marginBottom: 40,
  display: "block",
  ["@media (min-width: 1024px)"]: {
    display: "none",
    marginBottom: 0,
    width: "auto"
  }
})

export const Heading = styled.h3({
  fontSize: "28px",
  lineHeight: "38px",
  marginBottom: "16px"
})
