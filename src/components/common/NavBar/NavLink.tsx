import Link from "next/link"
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

const NavItem = styled.span`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: underline;
    cursor: pointer;
  }
`

const NavLink: React.FC = () => (
  <Container>
    <Link href="/"><NavItem>Home</NavItem></Link>
    <ReachMe />
  </Container>
)

export default NavLink
