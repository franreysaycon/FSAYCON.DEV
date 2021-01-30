import styled from "styled-components"

const Divider = styled.hr`
  width: 98%;
  margin-top: ${({ theme }) => theme.spaces[3]};
  margin-bottom: ${({ theme }) => theme.spaces[3]};
`

export default Divider
