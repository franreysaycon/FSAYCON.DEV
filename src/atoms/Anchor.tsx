import React from "react"
import styled from "styled-components"

const Container = styled.a`
  outline: 0;
  font-family: ${({ theme }) => theme.fonts.barlow};
  font-size: inherit;
  color: ${({ theme }) => theme.colors.purple};
  text-decoration: underline;

  &:visited {
    color: ${({ theme }) => theme.colors.purple};
  }
`

interface AnchorProps {
    children: React.ReactNode;
}

const Anchor: React.FC<AnchorProps & JSX.IntrinsicElements['a']> = ({ href, children }) => (
  <Container target="_blank" href={href}>
    {children}
  </Container>
)

export default Anchor
