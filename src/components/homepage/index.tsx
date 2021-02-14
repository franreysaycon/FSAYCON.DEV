import Box from "atoms/Box"
import React from "react"
import styled from "styled-components"
import BlogList from "./BlogList"
import { BlogListProps } from "./BlogList/types"
import Hero from "./Hero"

const HeroContainer = styled(Box)`
  flex-direction: column;
`

const BlogContainer = styled(Box)`
  background-color: ${({ theme }) => theme.colors.gray};
  flex-direction: column;
`

const Homepage: React.FC<BlogListProps> = ({ items }) => (
  <>
    <HeroContainer>
      <Hero />
    </HeroContainer>
    <BlogContainer>
      <BlogList items={items} />
    </BlogContainer>
  </>
)

export default Homepage
