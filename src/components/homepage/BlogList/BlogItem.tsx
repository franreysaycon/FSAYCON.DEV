import { BlogMetaData } from "components/blog/types"
import React from "react"
import styled from "styled-components"
import Link from "next/link"
import Header from "atoms/Header"
import Tag from "atoms/Tag"
import { motion } from "framer-motion"

const BlogItemContainer = styled(motion.div)`
  display: flex;
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  height: 15rem;
  
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
  margin: ${({ theme }) => theme.spaces[3]};
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

const itemVariants = {
  visible: {
    opacity: 1,
    scale: 1, 
    transition: {
      ease: "easeIn",
      duration: 0.6,
    }
  },
  hidden: { opacity: 0, scale: 0.8 }
}

const BlogItem: React.FC<BlogMetaData> = ({ slug, title, date, tags, duration, description }) => (
  <Link href={`/blog/${slug}`}>
    <BlogItemContainer
      variants={itemVariants}
      whileHover={{ 
        top: -10,
        transition: {
          ease: "linear",
          duration: 0.1
        }
      }}
    >
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
