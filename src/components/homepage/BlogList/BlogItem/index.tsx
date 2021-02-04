import { BlogMetaData } from "components/blog/types"
import React from "react"
import styled from "styled-components"
import Link from "next/link"
import Header from "atoms/Header"
import Tag from "atoms/Tag"

const BlogItemContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  
  &:hover {
    cursor: pointer;
  }
`

const ArticleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const MarginContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: ${({ theme }) => theme.spaces[1]};
  font-family: ${({ theme }) => theme.fonts.barlow};
  color: ${({ theme }) => theme.colors.black};
`

const MetaSpan = styled.span`
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes[1]};
`

const DetailSpan = styled.span`
  margin-top: ${({ theme }) => theme.spaces[0]};
  font-size: ${({ theme }) => theme.fontSizes[2]};
`

const TagContainer = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  flex-wrap: wrap;
  align-self: flex-end;
`

const BlogItem: React.FC<BlogMetaData> = ({ slug, title, date, tags, duration, description }) => (
  <Link href={`/blog/${slug}`}>
    <BlogItemContainer>
      <MarginContainer>
        <ArticleContainer>
          <Header.H2>{title}</Header.H2>
          <MetaSpan>{`${date} (${duration} read)`}</MetaSpan>
          <DetailSpan>{description}</DetailSpan>
        </ArticleContainer>
        <TagContainer>
          {
            tags.map( tag => <Tag key={tag}>{tag}</Tag>)
          }
        </TagContainer>
      </MarginContainer>
    </BlogItemContainer>
  </Link>
)

export default BlogItem
