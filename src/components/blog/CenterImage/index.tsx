import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spaces[2]};
  flex-direction: column;
`

const Image = styled.img`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spaces[0]};
`

const AltText = styled.span`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: inherit;
`

const CenterImage: React.FC<JSX.IntrinsicElements['img']> = ({ src, alt }) => (
  <Container>
    <Image src={src} alt={alt} />
    <AltText>{alt}</AltText>
  </Container>
)

export default CenterImage
