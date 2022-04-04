import Head from 'next/head'
import Header from '../components/header'
import Page from '../components/page'
import Footer from '../components/footer'
import Meta from '../components/component/component-meta'
import { getSortedPostsData } from '../lib/query'
import styles from './fullpage.module.scss'
const categoryType = 'contatti';
const categorySlug = 'contatti'; 
const postTitle = 'Contatti';
const pageID = '255'; 
export default function Post({ page, posts }) {
  return (
    <div className='baround'>
      <Head>
        <title>Baround {page.title.rendered ? ` - ${page.title.rendered}` : ''}</title>
        <Meta data={page} postTitle={postTitle}/>
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