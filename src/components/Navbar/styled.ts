import styled from 'styled-components'

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 110px;
  background: #ffffff;
  border-right: 2px solid #c4c4c4;
  height: 100vh;
`
const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NavbarItem = styled.li<{
  top?: string
  bot?: string
  width: string
  height: string
  radius?: string
  bgcolor?: string
  border?: string
}>`
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => (props.top ? props.top : '')};
  margin-bottom: ${(props) => (props.bot ? props.bot : '')};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => (props.radius ? props.radius : '')};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '')};
  border: ${(props) => (props.border ? props.border : '')};
`

const NavbarItemImg = styled.img<{ width?: string; height?: string }>`
  width: ${(props) => (props.width ? props.height : '')};
  height: ${(props) => (props.width ? props.height : '')};
`

export { NavbarContainer, NavbarList, NavbarItem, NavbarItemImg }