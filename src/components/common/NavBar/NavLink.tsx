import React from "react"
import styled from "styled-components"
import ReachMe from "./ReachMe"

const Container = styled.div`
  display: flex;
  width: auto;
  font-family: ${({ theme }) => theme.fonts.barlow};
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes[1]};
`



const NavLink: React.FC = () => (
  <Container>
    <span>Home</span>
    <ReachMe />
  </Container>
)

export default NavLink
