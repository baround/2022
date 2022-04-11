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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Meta data={page} postTitle={postTitle} />
      </Head>
      <Header />
      <Page pageData={page} pageType={categorySlug} />
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
  const page = await getSortedPostsData('pages/' + pageID)
  const posts = await getSortedPostsData(categoryType + '?page=1&per_page=100')
  return {
    props: {
      page,
      posts
    }
  }
}