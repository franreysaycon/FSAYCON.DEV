import Button from "atoms/Button"
import React from "react"
import styled from "styled-components"

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

const ReachButton = styled(Button)`
  margin-left: ${({ theme }) => theme.spaces[3]};
`

const NavLink: React.FC = () => (
  <Container>
    <span>Home</span>
    <ReachButton>Want to reach me?</ReachButton>
  </Container>
)

export default NavLink
