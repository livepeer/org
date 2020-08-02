import styled from "@emotion/styled"

export const Container = styled.div({
  borderRadius: 1000,
  backgroundColor: "#97F2EF",
  display: "flex",
  width: 320,
  height: 320,
  margin: "0 auto 64px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  ["@media (min-width: 1024px)"]: {
    margin: 0,
    width: 400,
    height: 400
  }
})

export const Inflation = styled.div({
  border: "2px solid #000",
  padding: "8px 24px",
  backgroundColor: "#A6ADEB",
  fontSize: 22
})
