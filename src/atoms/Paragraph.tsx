import styled from "styled-components"

const Paragraph = styled.p`
  font-family: inherit;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.spaces[2]};
  margin-bottom: ${({ theme }) => theme.spaces[2]};
`

export default Paragraph
