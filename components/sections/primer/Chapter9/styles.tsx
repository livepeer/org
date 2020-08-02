import styled from "@emotion/styled"

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 94px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    padding: 0,
    margin: "0 auto 160px"
  }
})

export const Title = styled.h2({
  transform: "rotate(3deg)",
  fontSize: "54px",
  textAlign: "center",
  lineHeight: "71px",
  fontWeight: 100,
  textTransform: "uppercase",
  marginBottom: 120,
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ":after": {
    content: '""',
    borderRadius: 1000,
    position: "absolute",
    backgroundColor: "#FFD184",
    width: 215,
    height: 215,
    zIndex: -1
  }
})

export const Section = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column-reverse",
  marginBottom: 40,
  ["@media (min-width: 1024px)"]: {
    flexDirection: "row",
    marginBottom: 80
  }
})

export const Flowers = styled.img({
  marginBottom: 40,
  width: "100%",
  ["@media (min-width: 1024px)"]: {
    width: "auto",
    marginBottom: 50
  }
})

export const List = styled.div({
  display: "grid",
  gridTemplateColumns: "100%",
  ["@media (min-width: 1024px)"]: {
    gridTemplateColumns: "33.33% 33.33% 33.33%",
    margin: "0 -24px"
  }
})

export const Item = styled.div({
  margin: "0 0 70px",
  textAlign: "center",
  ["@media (min-width: 1024px)"]: {
    textAlign: "left",
    paddingRight: "24px",
    margin: "0 24px"
  }
})

export const Header = styled.div({
  display: "flex",
  marginBottom: 16,
  flexDirection: "column",
  alignItems: "center",
  ["@media (min-width: 1024px)"]: {
    alignItems: "initial"
  }
})

export const Icon = styled.img({
  width: 80,
  height: 80,
  margin: 0
})

export const Text = styled.h3({
  fontSize: "28px",
  lineHeight: "38px",
  margin: 0
})

export const Heading = styled.h3({
  fontSize: "28px",
  lineHeight: "38px",
  marginBottom: "24px"
})

export const Button = styled.a({
  display: "inline-block",
  background: "#FFD184",
  border: "2px solid #000000",
  borderRadius: "3px",
  textAlign: "center",
  padding: "6px 24px",
  textTransform: "uppercase",
  color: "#000000",
  marginTop: 32,
  textDecoration: "none",
  transition: "background .3s",
  "&:hover": {
    background: "#95F58C",
    transition: "background .3s"
  }
})
