import styled from "styled-components"

const Box = styled.div`
  align-items: center;
  display: none;
  flex: 1;
  height: 12rem;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    display: flex;
    height: 18rem;
    overflow: hidden;
    align-items: flex-start;
  }
`

export default Box
