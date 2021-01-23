import React from "react"
import Box from "@/components/Box"
import styled from "styled-components"
import Hero from "@/components/Hero"
import MarginBox from "@/components/MarginBox"

const Container = styled(Box)`
  background: hsla(215, 57%, 46%, 1);
  background: linear-gradient(90deg, hsla(215, 57%, 46%, 1) 0%, hsla(215, 100%, 30%, 1) 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#336BB8", endColorstr="#00409B", GradientType=1 );
`

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  height: inherit;
  overflow: hidden;
  width: 100%;
`

const HeroContainer = styled(ContentContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
`
 
const Homepage: React.FC = () => (
  <Container>
    <MarginBox>
      <ContentContainer>
        <HeroContainer>
          <Hero />
        </HeroContainer>
      </ContentContainer>
      <ContentContainer>
        HELLO
      </ContentContainer>
    </MarginBox>
  </Container>
)

export default Homepage
