import React from "react"
import styled from "styled-components"

const H = styled.header`
  font-size: ${({ theme, size}) => theme.fontSizes[6 - size]};
  font-family: inherit;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black };
`

interface HeaderProps {
  className?: string;
  children: JSX.Element | string;
}

const H1: React.FC<HeaderProps> = ({ className, children }) => (
  <H size={1} className={className}>{children}</H>
)

const H2: React.FC<HeaderProps> = ({ className, children }) => (
  <H size={2} className={className}>{children}</H>
  )

const H3: React.FC<HeaderProps> = ({ className, children }) => (
  <H size={3} className={className}>{children}</H>
)

const H4: React.FC<HeaderProps> = ({ className, children }) => (
  <H size={4} className={className}>{children}</H>
)

export default {
    H1,
    H2,
    H3,
    H4
}
