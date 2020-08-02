import { useState } from "react"
import { Link, Events } from "react-scroll"
import {
  Root,
  Inner,
  Header,
  List,
  ListContainer,
  Item,
  ButtonText,
  Circle
} from "./styles"

const Menu = () => {
  const [active, setActiveState] = useState(false)
  return (
    <Root>
      <Inner isActive={active}>
        <Header
          isActive={active}
          onClick={() => {
            active ? setActiveState(false) : setActiveState(true)
          }}
        >
          <ButtonText>Contents</ButtonText>
          <Circle className="menu__circle" />
        </Header>
        <List isActive={active}>
          <ListContainer isActive={active}>
            <Item>
              <Link
                activeClass="active"
                to="introduction"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                Introduction
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="active"
                to="chapter1"
                spy
                ignoreCancelEvents={true}
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                What is Livepeer?
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="active"
                to="chapter2"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                Who is Livepeer for?
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="active"
                to="chapter3"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                How Does Livepeer Work?
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="active"
                to="chapter4"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                Orchestrators
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="active"
                to="chapter5"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                Livepeer Tokens
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="active"
                to="chapter6"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                Delegators
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="active"
                to="chapter7"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                Rewarding Participation
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="active"
                to="chapter8"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                Rounds & Inflation
              </Link>
            </Item>
            <Item>
              <Link
                activeClass="active"
                to="chapter9"
                spy
                smooth
                offset={-50}
                duration={500}
                onClick={() => {
                  setActiveState(false)
                }}
              >
                Get Involved
              </Link>
            </Item>
          </ListContainer>
        </List>
      </Inner>
    </Root>
  )
}

export default Menu
