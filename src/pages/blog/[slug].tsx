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
