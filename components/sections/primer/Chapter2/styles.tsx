import styled from "@emotion/styled"

export const Container = styled.div({
  maxWidth: 1024,
  margin: "0 auto 40px",
  padding: "0 24px",
  ["@media (min-width: 1024px)"]: {
    padding: 0,
    margin: "0 auto 224px"
  }
})

export const Title = styled.h2({
  transform: "rotate(3deg)",
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

export const List = styled.div({
  display: "grid",
  gridTemplateColumns: "100%",
  ["@media (min-width: 1024px)"]: {
    gridTemplateColumns: "33.33% 33.33% 33.33%",
    margin: "0 -24px"
  }
})

export const Item = styled.div({
  margin: "0 0 40px",
  ["@media (min-width: 1024px)"]: {
    paddingRight: "24px",
    margin: "0 24px"
  }
})

export const Header = styled.div({
  display: "flex",
  alignItems: "center",
  marginBottom: "32px"
})

export const Icon = styled.img({
  width: 80,
  height: 80,
  marginRight: 8,
  marginBottom: 0
})

export const Text = styled.h3({
  fontSize: "28px",
  lineHeight: "38px",
  margin: 0
})

export const Body = styled.div({})
