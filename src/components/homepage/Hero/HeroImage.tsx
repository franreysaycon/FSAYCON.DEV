import React from "react"
import styled from "styled-components"

const StyledImage = styled.img`
  width: 25rem;
  position: relative;
  top: 50px;
`

const HeroImage: React.FC = () => (
  <StyledImage src="/hero.png" alt="fsaycon.dev hero image that shows a cyborg version of myself solving an advanced rubix cube" />
)

export default HeroImage
