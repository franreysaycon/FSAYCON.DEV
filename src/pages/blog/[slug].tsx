import BlogApp from "components/blog"
import { BlogPageProps } from "components/blog/types"
import getAllPosts from "lib/get-all-posts"
import getPostBySlug from "lib/get-post-by-slug"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import React from "react"

const BlogPage: NextPage<BlogPageProps> = ({ content, data }) => (
  <>
    <Head>
      <link rel="canonical" href={`https://fsaycon.dev/blog/${data.slug}`} />
      <meta property="og:url" content={`https://fsaycon.dev/blog/${data.slug}`} key="og:url" />
      <meta name="description" content={data.description} key="description" />
      <meta name="og:description" content={data.description} key="og:description" />    
      <meta property="og:type" content="article" key="og:type" />
      <meta property="og:title" content={data.title} key="og:title" />
    </Head>
    <BlogApp
      content={content}
      title={data.title}
      duration={data.duration}
      date={data.date}
    />
  </>
)

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string)
  return {
    props: post,
  }
}

export const getStaticPaths: GetStaticPaths  = async () => {
  const { items } = getAllPosts()

  return {
    paths: items.map((item) => ({
        params: {
          slug: item.data.slug,
        },
      })),
    fallback: false,
  }
}

export default BlogPage
