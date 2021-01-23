import MarginBox from "atoms/MarginBox"
import React from "react"
import styled from "styled-components"
import HeroImage from "./HeroImage"

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  margin-top: ${({ theme }) => theme.spaces[5]};
  flex-direction: column;
`

const Box = styled.div`
  height: inherit;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const DetailBox = styled(Box)`
  position: relative;
  top: -50px;
  flex-direction: column;
  align-items: flex-start;
`

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
`

const BlogContainer = styled.div`
  position: relative;
  top: -90px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.gray};
  min-height: 50rem;
  width: 100%;
`

const Hero: React.FC = () => (
  <Container>
    <MarginBox>
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
    </MarginBox>
    <BlogContainer>
      Lorem ipsum
    </BlogContainer>
  </Container>
)

export default Hero
