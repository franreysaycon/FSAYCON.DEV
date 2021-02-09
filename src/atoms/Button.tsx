import React, { ReactNode, SyntheticEvent } from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  border-radius: 2rem;
  padding: ${({ theme }) => `${theme.spaces[0]} ${theme.spaces[4]} ${theme.spaces[0]} ${theme.spaces[4]}`};
  background-color: ${({ theme }) => theme.colors.orange};
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  border-shadow: none;
  font-family: ${({ theme }) => theme.fonts.barlow};
  font-size: inherit;
  text-transform: inherit;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`

type ButtonProps = {
    children: ReactNode;
    onClick: (event: SyntheticEvent) => void;
    className: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => (
  <StyledButton onClick={onClick} className={className}>
    { children }
  </StyledButton>
)

export default Button
