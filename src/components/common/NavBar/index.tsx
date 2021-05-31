import React from "react"
import MarginBox from "atoms/MarginBox"
import styled from "styled-components"
import Logo from "atoms/Logo"
import Box from "atoms/Box"
import NavLink from "./NavLink"

const Container = styled(Box)`
  display: block;
  width: ${({ theme }) => `calc(100% - ${theme.spaces[5]} * 2)`};
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.black };
  height: 3rem;
  z-index: ${({ theme }) => theme.zIndex.front};
`

const NavBox = styled(MarginBox)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const NavBar: React.FC = () => (
  <Container
    animate={{ y: 0, opacity: 1 }}
    initial={{ y: -10, opacity: 0 }}
    transition={{ ease: "easeIn", duration: 0.5 }}
  >
    <NavBox>
      <Logo />
      <NavLink />
    </NavBox>
  </Container>
)

export default NavBar
