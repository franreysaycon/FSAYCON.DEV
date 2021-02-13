import HomeApp from "components/homepage"
import { BlogListProps } from "components/homepage/BlogList/types"
import getAllPosts from "lib/get-all-posts"
import { GetStaticProps } from "next"
import React from "react"

const Homepage: React.FC<BlogListProps> = ({ items }) => (
  <HomeApp items={items} />
)

export const getStaticProps: GetStaticProps = async () => {
  const { items } = getAllPosts()
  return {
    props: {
        items: [...items],
        meta: {
          title: "FSAYCON.DEV - Personal Website of Franrey Saycon",
          description: "Hi there, I'm Franrey Saycon. I'm a software engineer specializing in architecting solutions and building website/mobile apps.",
          link: "https://fsaycon.dev/",
        }
    }
  }
}

export default Homepage
