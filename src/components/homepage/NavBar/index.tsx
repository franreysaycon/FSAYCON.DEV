import React from "react"
import MarginBox from "atoms/MarginBox"
import styled from "styled-components"
import Logo from "atoms/Logo"
import NavLink from "./NavLink"

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.black };
  display: flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
`

const NavBox = styled(MarginBox)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const NavBar: React.FC = () => (
  <Container>
    <NavBox>
      <Logo />
      <NavLink />
    </NavBox>
  </Container>
)

export default NavBar
