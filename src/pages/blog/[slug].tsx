import BlogApp from "components/blog"
import { BlogPageProps } from "components/blog/types"
import MetaHead from "components/common/MetaHead"
import getAllPosts from "lib/get-all-posts"
import getPostBySlug from "lib/get-post-by-slug"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import React from "react"

const BlogPage: NextPage<BlogPageProps> = ({ content, data }) => (
  <>
    <MetaHead
      title={`FSAYCON.DEV - ${data.title}`}
      description={data.description}
      link={`https://fsaycon.dev/blog/${data.slug}`} 
    />
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
    props: { 
      ...post,
      meta: {
        title: `FSAYCON.DEV - ${post.data.title}`,
        description: post.data.description,
        link: `https://fsaycon.dev/blog/${post.data.slug}`,
      },
    }
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
