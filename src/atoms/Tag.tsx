import styled from "styled-components"

const Tag = styled.span`
  padding: ${({ theme }) => `${theme.spaces[0]} ${theme.spaces[2]} ${theme.spaces[0]} ${theme.spaces[2]}`};
  border-radius: 5rem;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.purple};
  margin: 2px;
  height: fit-content;
`

export default Tag
