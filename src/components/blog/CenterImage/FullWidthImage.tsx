import styled from "styled-components"

const FullWidthImage = styled.img`
  margin-bottom: ${({ theme }) => theme.spaces[0]};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 70%;
  }
`

export default FullWidthImage
