import React from "react"
import styled from "styled-components"
import BlogList from "./BlogList"
import { BlogListProps } from "./BlogList/types"
import Hero from "./Hero"

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Homepage: React.FC<BlogListProps> = ({ items }) => (
  <Container>
    <Hero />
    <BlogList items={items} />
  </Container>
)

export default Homepage
