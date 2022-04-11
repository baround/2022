import Head from 'next/head'
import Header from '../../components/header'
import Page from '../../components/page'
import Article from '../../components/homepage/article'
import Footer from '../../components/footer'
import { getSortedPostsData } from '../../lib/query'
import styles from '../fullpage.module.scss'
import Meta from '../../components/component/component-meta'

const categoryType = 'posts';
const categorySlug = 'diario';
const postTitle = 'Diario';
const pageID = '970';
export default function Post({ page, posts }) {
  let postList = [];
  posts.forEach((x, y, z) => !(y % 4) ? postList.push(z.slice(y, y + 4)) : '');
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
      <section id={categorySlug} className={`${styles.fullpage} ${categorySlug}`}>
        {postList.map((block, index) => {
          return (
            <div className={`${styles.fullpage__row} ${categorySlug}__row`} key={index}>
              <div className={`${styles.fullpage__row__wrap} ${categorySlug}__row__wrap`}>
                {
                  block.map((post, index) => {
                    return (
                      <Article block={post} classList={`${styles.fullpage__post} ${categorySlug}__post post post__card`} baseLink={`/${categorySlug}`} key={index} pageType={categorySlug} />
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
  const page = await getSortedPostsData('pages/' + pageID)
  const posts = await getSortedPostsData(categoryType + '?page=1&per_page=100')
  return {
    props: {
      page,
      posts
    }
  }
}