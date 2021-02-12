import Link from "next/link"
import React from "react"
import styled from "styled-components"

const Container = styled.span`
  color: ${({ theme }) => theme.colors.white };
  font-family: ${({ theme }) => theme.fonts.barlow};
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`

const Logo: React.FC = () => (
  <Link href="/">
    <Container>
      {'< fsaycon.dev />'}
    </Container>
  </Link>
)

export default Logo
