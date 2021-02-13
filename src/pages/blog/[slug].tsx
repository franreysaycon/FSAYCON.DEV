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
      <title key="title">
        FSAYCON.DEV -&nbsp;
        {data.title}
      </title>
      <link rel="canonical" href={`https://fsaycon.dev/blog/${data.slug}`} />
      <meta name="description" content={data.description} key="description" />
      <meta property="og:title" content={data.title} key="og:title" />
      <meta property="og:description" content={data.description} key="og:description" />    
      <meta property="og:url" content={`https://fsaycon.dev/blog/${data.slug}`} key="og:url" />
      <meta name="twitter:title" content={data.title} key="twitter:title" />
      <meta name="twitter:description" content={data.description} key="twitter:description" />
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
