import Divider from "atoms/Divider"
import Header from "atoms/Header"
import MarginBox from "atoms/MarginBox"
import Paragraph from "atoms/Paragraph"
import Page from "components/common/Page"
import goBack from "lib/go-back"
import { NextPage } from "next"
import React from "react"
import { ArrowLeft } from "react-feather"
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

const BackSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spaces[2]};
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
`

const Icon = styled(ArrowLeft)`
  margin-right: 5px;
`

const BlogPage: NextPage<BlogAppProps> = ({ content , title, duration, date}) => (
  <Page>
    <Container>
      <BackSpan onClick={goBack} role="button">
        <Icon />
        Go Back
      </BackSpan>
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
