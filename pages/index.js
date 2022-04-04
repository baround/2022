import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/homepage/hero'
import Diario from '../components/homepage/diario'
import Locali from '../components/homepage/locali'
import Itinerari from '../components/homepage/itinerari'
import Footer from '../components/footer'
import { getSortedPostsData } from '../lib/query'
import Meta from '../components/component/component-meta'

export default function Home({home, locali, itinerari, posts, bestPost}) {
  return (
    <div className='baround'>
      <Head>
        <title>Baround</title>
        <Meta data={''} postTitle=''/>
      </Head>
      <Header />
      <>
        {home.acf.homepage.map((block, index) => {
          if(block.acf_fc_layout == 'hero'){
            return (
              <Hero content={block} key={index} />
            )
          } else if(block.acf_fc_layout == 'diario'){
            return(
              <Diario content={block} postData={posts} pinned={bestPost} key={index} />
            )
          } else if(block.acf_fc_layout == 'locali'){
            return(
              <Locali content={block} postData={locali} key={index}/>
            )
          } else if(block.acf_fc_layout == 'itinerari'){
            return(
              <Itinerari content={block} postData={itinerari} key={index} />
            )
          }               
        })}
      </>
      <Footer />
    </div>
  )
}
export async function getStaticProps(){
  const home = await getSortedPostsData('pages/658')
  const locali = await getSortedPostsData('locali?page=1&per_page=100')
  const itinerari = await getSortedPostsData('itinerari?page=1&per_page=4')
  const posts = await getSortedPostsData('posts?page=1&per_page=9')
  const bestPost = await getSortedPostsData('posts?categories=34&page=1&per_page=1')
  return {
    props: {
      home,
      locali,
      itinerari,
      posts,
      bestPost
    }
  }
}