import styled from "styled-components"

const List = styled.ul`
  font-family: ${({ theme }) => theme.fonts.barlow};
  font-size: inherit;
  color: inherit;
  list-style: unset;
  margin-left: ${({ theme }) => theme.spaces[6]};
`

export default List
