import { BlogMetaData, BlogItem } from 'components/blog/types';
import fs from 'fs'
import moment from 'moment';
import getPostBySlug from './get-post-by-slug'
import getPostDirectory from './get-post-directory';

const sortMoment = (date1: string, date2: string): number => moment(date1).format('YYYY-MM-DD') > moment(date2).format('YYYY-MM-DD') ? -1: 1;

const getAllPosts = (): BlogMetaData[] => {
  const postsDirectory = getPostDirectory()
  const slugs = fs.readdirSync(postsDirectory)

  const blogItems: BlogItem[] = slugs.map(slug => getPostBySlug(slug.replace(/\.md$/, '')))
  blogItems.sort((blogA, blogB) => sortMoment(blogA.data.date, blogB.data.date))

  return blogItems.map(bi => bi.data)
}

export default getAllPosts
