import Box from "atoms/Box"
import MarginBox from "atoms/MarginBox"
import React from "react"
import styled from "styled-components"

const Container = styled(Box)`
  background-color: ${({ theme }) => theme.colors.black};
`

const Content = styled(MarginBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.barlow};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.white};
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spaces[3]};
  padding-bottom: ${({ theme }) => theme.spaces[3]};
`

const CoffeeLink = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.blue};

  &:visited {
    color: ${({ theme }) => theme.colors.blue};
  }
`

const Footer: React.FC = () => (
  <Container>
    <Content>
      <span>
        Plus ultra! If you like my content, consider&nbsp;
        <CoffeeLink href="https://www.buymeacoffee.com/fsaycondev" target="_blank" rel="noreferrer">buying me coffee :D</CoffeeLink> 
      </span>
      <span>Ⓒ Franrey Anthony S. Saycon (All Rights Reserved)</span>
    </Content>
  </Container>
)

export default Footer
