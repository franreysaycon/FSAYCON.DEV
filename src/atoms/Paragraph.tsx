import styled from "styled-components"

const Paragraph = styled.p`
  font-family: inherit;
  font-size: inherit;
  color: ${({ theme }) => theme.colors.black};
  margin-top: ${({ theme }) => theme.spaces[3]};
  margin-bottom: ${({ theme }) => theme.spaces[3]};
`

export default Paragraph
