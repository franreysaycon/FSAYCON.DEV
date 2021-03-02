import Anchor from "atoms/Anchor"
import Box from "atoms/Box"
import Divider from "atoms/Divider"
import Header from "atoms/Header"
import List from "atoms/List"
import MarginBox from "atoms/MarginBox"
import Paragraph from "atoms/Paragraph"
import { NextPage } from "next"
import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import BackButton from "./BackButton"
import CenterImage from "./CenterImage"
import { BlogAppProps } from "./types"

const Container = styled(MarginBox)`
  font-family: ${({ theme }) => theme.fonts.barlow};
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces[3]};
`

const Content = styled.article`
  display: flex;
  flex: 1;
  font-family: inherit;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spaces[3]};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spaces[3]};
`

const BlogPage: NextPage<BlogAppProps> = ({ content , title, duration, date}) => (
  <Box>
    <Container itemScope itemType="https://schema.org/TechArticle">
      <BackButton />
      <Header.H1 itemProp="headline">{title}</Header.H1>
      <span>
        {'by: '}
        <span itemProp="author">Franrey Saycon</span>
        {'-- '}
        <time dateTime={date} itemProp="dateCreated">{date}</time>
        {` (${duration} read)`}
      </span>
      <Content itemProp="articleBody">
        <ReactMarkdown renderers={{ 
            paragraph: Paragraph,
            thematicBreak: Divider,
            image: CenterImage,
            heading: Header.H3,
            list: List,
            link: Anchor,
          }}
        >
          {content}
        </ReactMarkdown>
      </Content>
    </Container>
  </Box>
)

export default BlogPage
