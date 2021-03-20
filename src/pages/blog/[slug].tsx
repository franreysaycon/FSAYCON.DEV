import BlogApp from "components/blog"
import { BlogItem } from "components/blog/types"
import getAllPosts from "lib/get-all-posts"
import getPostBySlug from "lib/get-post-by-slug"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import React from "react"
import { jsonLdScriptProps } from "react-schemaorg"
import { TechArticle } from "schema-dts"

const BlogPage: NextPage<BlogItem> = ({ content, data }) => (
  <>
    <Head>
      <script
        {...jsonLdScriptProps<TechArticle>({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: data.title,
          author: "Franrey Saycon",
          dateCreated: data.date,
          abstract: data.description
        })}
      />
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
    props: { 
      ...post,
      meta: {
        title: `FSAYCON.DEV - ${post.data.title}`,
        description: post.data.description,
        link: `https://fsaycon.dev/blog/${post.data.slug}`,
        previewImage: `${post.data.slug}-preview.png`,
      },
    }
  }
}

export const getStaticPaths: GetStaticPaths  = async () => {
  const items = getAllPosts()

  return {
    paths: items.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  }
}

export default BlogPage
