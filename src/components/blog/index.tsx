import Anchor from "atoms/Anchor"
import Box from "atoms/Box"
import Divider from "atoms/Divider"
import Header from "atoms/Header"
import List from "atoms/List"
import MarginBox from "atoms/MarginBox"
import Paragraph from "atoms/Paragraph"
import { NextPage } from "next"
import dynamic from "next/dynamic"
import React from "react"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"
import CenterImage from "./CenterImage"
import { BlogAppProps } from "./types"


const BackButton = dynamic(() => import('./BackButton'), { ssr: false })

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
    <Container>
      <BackButton />
      <Header.H1>{title}</Header.H1>
      <span>{`by: Franrey Saycon -- ${date} (${duration} read)`}</span>
      <Content>
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
