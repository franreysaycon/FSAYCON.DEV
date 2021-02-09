import styled from "styled-components"

const MarginBox = styled.div`
  display: flex;
  flex: 1;
  height: inherit;
  margin: auto;
  max-width: 1200px;
  padding-left: ${({ theme }) => theme.spaces[5] };
  padding-right: ${({ theme }) => theme.spaces[5] };
`

export default MarginBox
