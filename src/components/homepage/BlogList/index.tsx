import MarginBox from "atoms/MarginBox"
import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import BlogItem from "./BlogItem"
import { BlogListProps } from "./types"

const Container = styled.div`
  width: 100%;
`

const MotionContainer = styled(motion.div)`
  display: grid;
  grid-column-gap: ${({ theme }) => theme.spaces[2]};
  grid-row-gap: ${({ theme }) => theme.spaces[2]};
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  padding-top: ${({ theme }) => theme.spaces[5]};
  padding-bottom: ${({ theme }) => theme.spaces[5]};
  width: 100%;
`

const listVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    }
  },
  hidden: {
    opacity: 0,
  },
}

const BlogList: React.FC<BlogListProps> = ({ items }) => (
  <Container>
    <MarginBox>
      <MotionContainer initial="hidden" animate="visible" variants={listVariants}> 
        {
          items.map( item => <BlogItem {...item} key={item.slug} />)
        }
      </MotionContainer>
    </MarginBox>
  </Container>
)

export default BlogList
