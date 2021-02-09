import MarginBox from "atoms/MarginBox"
import React from "react"
import styled from "styled-components"
import HeroImage from "./HeroImage"
import Box from "./Box"

const Header = styled.h1`
  font-family: ${({ theme }) => theme.fonts.staatchiles};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes[6]};
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
`

const SubHeader = styled.h2`
  position: relative;
  top: -8px;
  font-family: ${({ theme }) => theme.fonts.staatchiles};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
`

const Detail = styled.p`
  margin-top: ${({ theme }) => theme.spaces[2]};
  font-family: ${({ theme }) => theme.fonts.barlow};
  text-align: center;
  max-width: 20rem;

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    text-align: left;
    max-width: none;
  }
`

const Container = styled(MarginBox)`
  margin-top: ${({ theme }) => theme.spaces[2]};

  @media (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    margin-top: ${({ theme }) => theme.spaces[5]};
  }
`

const DetailBox = styled(Box)`
  display: flex;
`

const Hero: React.FC = () => (
  <Container>
    <Box>
      <HeroImage />
    </Box>
    <DetailBox>
      <Header>Franrey Saycon</Header>
      <SubHeader>Software engineer / Architect • Team Lead</SubHeader>
      <Detail>
        I just like writing and speaking about developing and 
        architecting solutions. There&apos;s also some random stuff too.
      </Detail>
    </DetailBox>
  </Container>
)

export default Hero
