import MarginBox from "atoms/MarginBox"
import React from "react"
import styled from "styled-components"
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

const BlogItem = styled.a`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.white};
`

const BlogItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const PreviewImage = styled.div`
  background: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 12rem;
`

const MetaContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.blue};
  font-family: ${({ theme }) => theme.fonts.barlow};
  flex-direction: column;
  height: 3rem;
  outline: none;
`

const MarginSpan = styled.span`
  margin-left: ${({ theme }) => theme.spaces[1]};
  margin-right: ${({ theme }) => theme.spaces[1]};
`

const BlogList: React.FC<BlogListProps> = ({ items }) => (
  <Container>
    <BlogContainer>
      {
        items.map(item => (
          <BlogItem href={`/blog/${item.data.slug}`}>
            <BlogItemContainer>
              <PreviewImage image={item.data.preview} />
              <MetaContainer>
                <MarginSpan>{item.data.title}</MarginSpan>
                <MarginSpan>{item.data.date}</MarginSpan>
              </MetaContainer>
            </BlogItemContainer>
          </BlogItem>
        ))
      }
    </BlogContainer>
  </Container>
)

export default BlogList
