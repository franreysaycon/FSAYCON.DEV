import Divider from "atoms/Divider"
import Header from "atoms/Header"
import MarginBox from "atoms/MarginBox"
import Paragraph from "atoms/Paragraph"
import Page from "components/common/Page"
import { NextPage } from "next"
import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
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
  <Page>
    <Container>
      <Header.H1>{title}</Header.H1>
      <span>{`by: Franrey Saycon -- ${date} (${duration} read)`}</span>
      <Content>
        <ReactMarkdown renderers={{ 
          paragraph: Paragraph,
          thematicBreak: Divider,
          image: CenterImage,
        }}
        >
          {content}
        </ReactMarkdown>
      </Content>
    </Container>
  </Page>
)

export default BlogPage
