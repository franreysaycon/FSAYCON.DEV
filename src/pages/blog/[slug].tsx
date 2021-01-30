import BlogApp from "components/blog"
import { BlogMetaData, BlogPageProps } from "components/blog/types"
import matter from "gray-matter"
import { NextPage } from "next"
import Head from "next/head"
import React from "react"

const BlogPage: NextPage<BlogPageProps> = ({ content, data }) => (
  <>
    <Head>
      <meta property="og:url" content={`https://fsaycon.dev/${data.slug}`} />
    </Head>
    <BlogApp
      content={content}
      title={data.title}
      duration={data.duration}
      date={data.date}
    />
  </>
)

BlogPage.getInitialProps = async (context): Promise<BlogPageProps> => {
  const { slug } = context.query
  
  const markdown = await import(`../../content/${slug}.md`)
  const { content, data } = matter(markdown.default)

  const metadata: BlogMetaData = {
    title: data.title,
    date: data.date,
    duration: data.duration,
    slug: slug as string,
  }

  return { content, data: metadata }
}

export default BlogPage
