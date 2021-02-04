import MarginBox from "atoms/MarginBox"
import React from "react"
import styled from "styled-components"
import BlogItem from "./BlogItem"
import { BlogListProps } from "./types"

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
  top: -90px;
  width: 100%;
`

const BlogContainer = styled(MarginBox)`
  display: grid;
  grid-column-gap: ${({ theme }) => theme.spaces[2]};
  grid-row-gap: ${({ theme }) => theme.spaces[2]};
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-rows: 15rem 15rem;
  padding-top: ${({ theme }) => theme.spaces[2]};
  padding-bottom: ${({ theme }) => theme.spaces[2]};
`

const BlogList: React.FC<BlogListProps> = ({ items }) => (
  <Container>
    <BlogContainer>
      {
        items.map(item => <BlogItem {...item.data} key={item.data.slug} />)
      }
    </BlogContainer>
  </Container>
)

export default BlogList
