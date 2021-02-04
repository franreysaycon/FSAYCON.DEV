import { BlogMetaData, BlogPageProps } from "components/blog/types"
import matter from "gray-matter"
import { join } from "path"
import fs from "fs"
import getPostDirectory from "./get-post-directory"

const getPostBySlug = (slug: string): BlogPageProps => {

  const postsDirectory = getPostDirectory()
  const realSlug = slug.replace(/\.md$/, '')

  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const metadata: BlogMetaData = {
    title: data.title,
    date: data.date,
    duration: data.duration,
    slug: slug as string,
    tags: data.tags.split(','),
    description: data.description,
  }

  return { content, data: metadata }
}

export default getPostBySlug
