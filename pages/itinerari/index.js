import Head from 'next/head'
import Header from '../../components/header'
import Page from '../../components/page'
import Article from '../../components/homepage/article'
import Footer from '../../components/footer'
import { getSortedPostsData } from '../../lib/query'
import styles from '../fullpage.module.scss'
const categoryType = 'itinerari';
const categorySlug = 'itinerari'; 
const postTitle = 'Itinerari';
const pageID = '1005'; 
export default function Post({ page, posts }) {
  let postList = [];
  posts.forEach((x, y, z) => !(y % 3) ? postList.push(z.slice(y, y + 3)) : '');
  return (
    <div className='baround'>
      <Head>
        <title>Baround - {postTitle}</title>
      </Head>
      <Header />
      <Page pageData={page} pageType={categorySlug} />
      <section id={categorySlug} className={`${styles.fullpage} ${categorySlug}`}>
        {postList.map((block, index) => {
          return (
            <div className={`${styles.fullpage__row} ${categorySlug}__row`} key={index}>
              <div className={`${styles.fullpage__row__wrap} ${categorySlug}__row__wrap`}>
                {
                  block.map((post, index) => {
                    return (
                      <Article block={post} classList={`${styles.fullpage__post} ${categorySlug}__post post post__card`} baseLink={`/${categorySlug}`} key={index} pageType={categorySlug}/>
                    )
                  })
                }
              </div>
            </div>
          )
        })}
      </section>
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