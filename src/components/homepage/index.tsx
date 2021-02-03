import React from "react"
import Page from "../common/Page"
import BlogList from "./BlogList"
import { BlogListProps } from "./BlogList/types"
import Hero from "./Hero"


const Homepage: React.FC<BlogListProps> = ({ items }) => (
  <Page>
    <Hero />
    <BlogList items={items} />
  </Page>
)

export default Homepage
