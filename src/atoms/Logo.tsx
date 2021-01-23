import React from "react"
import styled from "styled-components"

const Container = styled.span`
  color: ${({ theme }) => theme.colors.white };
  font-family: ${({ theme }) => theme.fonts.barlow};
  font-weight: 400;
`

const Logo: React.FC = () => (
  <Container>
    {'< fsaycon.dev />'}
  </Container>
)

export default Logo
