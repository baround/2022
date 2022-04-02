import Head from 'next/head'
import Header from '../components/header'
import Page from '../components/page'
import Footer from '../components/footer'
import { getSortedPostsData } from '../lib/query'
import styles from './fullpage.module.scss'
const categoryType = 'privacy-policy';
const categorySlug = 'privacy-policy'; 
const postTitle = 'Privacy Policy';
const pageID = '3'; 
export default function Post({ page, posts }) {
  return (
    <div className='baround'>
      <Head>
        <title>Baround - {postTitle}</title>
      </Head>
      <Header />
      <Page pageData={page} pageType={categorySlug} />
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
  const page = await getSortedPostsData('pages/'+pageID)
  const posts = await getSortedPostsData(categoryType + '?page=1&per_page=100')
  return {
    props: {
      page,
      posts
    }
  }
}