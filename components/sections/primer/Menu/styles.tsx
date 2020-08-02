import styled from "@emotion/styled"

export const Root = styled.div({
  height: "50px",
  zIndex: 100
})

export const Inner = styled.div((props: any) => ({
  borderRadius: "5px 5px 0 0",
  position: "relative",
  transform: "scale(1)",
  zIndex: 100,
  display: "flex",
  width: 308,
  pointerEvents: props.isActive ? "initial" : "none"
}))

export const Header = styled.div((props: any) => ({
  backgroundColor: "#A6ADEB",
  alignItems: "center",
  border: "1px solid #000",
  borderRadius: props.isActive ? "5px 5px 0 0" : "5px",
  boxShadow: "3px 3px #000",
  cursor: "pointer",
  opacity: 1,
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 16px",
  overflow: "hidden",
  pointerEvents: "all",
  position: "absolute",
  right: 0,
  textAlign: "center",
  transition: props.isActive
    ? "width .6s cubic-bezier(.23,1,.32,1),border-radius 0s .45s"
    : "width .6s cubic-bezier(.23,1,.32,1) .2s, border-radius 0s .22s,opacity .4s cubic-bezier(.23,1,.32,1)",
  width: props.isActive ? 304 : 140,
  zIndex: 300,
  "&:hover .menu__circle": {
    backgroundColor: "#FFAD61",
    transition: "background-color .6s"
  }
}))

export const List = styled.div((props: any) => ({
  overflow: "hidden",
  paddingBottom: ".2rem",
  position: "relative",
  top: "45px",
  width: 308,
  zIndex: 400,
  paddingRight: "4px",
  left: "4px",
  pointerEvents: props.isActive ? "initial" : "none"
}))

export const ListContainer = styled.div((props: any) => ({
  backgroundColor: "#A6ADEB",
  border: "1px solid #000",
  borderTop: "0",
  borderRadius: "0 0 5px 5px",
  boxShadow: "3px 3px #000",
  overflow: "hidden",
  padding: "8px 24px",
  position: "relative",
  transform: props.isActive
    ? "translateY(0)"
    : "translateY(-100%) translateY(-4.5rem)",
  transformOrigin: "50% 0",
  transition: props.isActive
    ? "transform .8s cubic-bezier(.165,.84,.44,1) .45s"
    : "transform .5s cubic-bezier(.23,1,.32,1)",
  width: 304,
  zIndex: 200
}))

export const Item = styled.div({
  cursor: "pointer",
  fontSize: 16,
  a: {
    display: "block",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundImage: "none",
    color: "initial",
    position: "relative",
    left: 0,
    transition: "left .3s"
  },
  "a:hover": {
    left: 8,
    transition: "left .3s"
  },
  "a:hover::before": {
    content: '"›"',
    position: "absolute",
    marginLeft: -12,
    transition: ".6s",
    width: 14,
    height: 14
  },
  ".active": {
    left: 8,
    transition: "left .3s"
  },
  ".active::before": {
    content: '"›"',
    position: "absolute",
    marginLeft: -12,
    transition: ".6s",
    width: 14,
    height: 14
  }
})

export const ButtonText = styled.div({
  textTransform: "uppercase",
  lineHeight: "19px",
  fontSize: 16,
  fontFamily: "Roboto Mono",
  marginRight: 16,
  position: "relative"
})

export const Circle = styled.div({
  borderRadius: 1000,
  width: 10,
  height: 10,
  border: "1px solid black",
  transition: "background-color .6s"
})
