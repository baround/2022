import { useEffect, useRef, useState } from 'react';
import Head from 'next/head'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { getSortedPostsData } from '../../lib/query'
import Map from '../../components/component/component-map'
import List from '../../components/component/component-list';
import Filters from '../../components/component/component-filters';
import styles from '../locali.module.scss'
import MapTest from '../../components/component/component-map-test';
import Meta from '../../components/component/component-meta'

const categoryType = 'locali';
const categorySlug = 'locali';
const postTitle = 'Locali';
export default function Post({ posts }) {
  const [mapObject, setMapObject] = useState(null);
  return (
    <div className='baround'>
      <Head>
        <title>Baround - Locali</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Meta data={''} postTitle={postTitle} />
      </Head>
      <Header />
      <div className={styles.locali}>
        <List data={posts} />
        <Map setMapObject={setMapObject} mapObject={mapObject} postData={posts} pageType={categorySlug} />
      </div>
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
  const posts = await getSortedPostsData(categoryType + '?page=1&per_page=100')
  return {
    props: {
      posts
    }
  }
}