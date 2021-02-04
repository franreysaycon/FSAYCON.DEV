import Homepage from "components/homepage"
import getAllPosts from "lib/get-all-posts"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
  const { items } = getAllPosts()
  return {
    props: {
        items: [...items]
    }
  }
}

export default Homepage
