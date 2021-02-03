import { BlogPageProps } from 'components/blog/types';
import { BlogListProps } from 'components/homepage/BlogList/types';
import fs from 'fs'
import moment from 'moment';
import getPostBySlug from './get-post-by-slug'
import getPostDirectory from './get-post-directory';

const sortMoment = (date1: string, date2: string): number => moment(date1).format('YYYY-MM-DD') > moment(date2).format('YYYY-MM-DD') ? -1: 1;

const getAllPosts = (): BlogListProps => {
  const postsDirectory = getPostDirectory()
  const slugs = fs.readdirSync(postsDirectory)

  const blogItems: BlogPageProps[] = slugs.map(slug => getPostBySlug(slug.replace(/\.md$/, '')))
  blogItems.sort((blogA, blogB) => sortMoment(blogA.data.date, blogB.data.date))

  return { items: blogItems }
}

export default getAllPosts
