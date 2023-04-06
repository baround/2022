import { getSortedPostsData, getAllPostIds, getPostData } from '../../lib/query'
import { useEffect, useRef, useState } from 'react';

import Head from 'next/head'
import Header from '../../components/header'
import Page from '../../components/page'
import Article from '../../components/homepage/article'
import Share from '../../components/component/component-share'
import Map from '../../components/component/component-map'
import Footer from '../../components/footer'
import Meta from '../../components/component/component-meta'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
const postType = 'locali';
const postTitle = 'Locale';

export default function Post({ postData, allPosts, itinerari }) {
  let postList = [...allPosts];
  let thisPost = postData;
  let postIndex = postList.findIndex(post => post.id == thisPost.id);
  postList.splice(postIndex, 1);
  // let latestPosts = [...postList].slice(0, 6);
  // let nearBar = [];
  // if (postData.acf.itinerari_vicini && postData.acf.itinerari_vicini.length > -1) {
  //   postData.acf.itinerari_vicini.map((itinerario, index) => {
  //     nearBar.push(itinerario.ID);
  //   })
  // }
  // let resBar = itinerari.filter(item => nearBar.includes(item.id));
  let nearItinerari = [];
  if (postData.acf.itinerari_vicini.length > 0) {
    postData.acf.itinerari_vicini.map((itinerario, index) => {
      nearItinerari.push(itinerario.ID);
    })
  }

  let itinerariVicini = itinerari.filter(item => nearItinerari.includes(item.id));
  let nearBar = [];

  if (postData.acf.locali_simili.length > 0) {
    postData.acf.locali_simili.map((bar, index) => {
      nearBar.push(bar.ID);
    })
  }
  let barVicini = allPosts.filter(item => nearBar.includes(item.id));
  const [mapObject, setMapObject] = useState(null);

  return (
    <div className='baround'>
      <Head>
        <title>Baround {postTitle ? `- ${postTitle}` : ''} {postData.yoast_head_json.title ? ` - ${postData.yoast_head_json.title}` : ''}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <Meta data={postData} postTitle={postTitle} />
      </Head>
      <Header />
      <Page pageData={postData} pageType={postType} />

      <Map setMapObject={setMapObject} postData={postData} pageType={'locale'} />

      <Share color='blue' />
      {
        nearBar.length > 0 ? (
          <section className='morePost morePost--locali contentText'>
            <div className='morePost__wrap'>
              <div className='morePost__wrap__row'>
                <h3>Bar simili a questo</h3>
              </div>
              <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  920: {
                    slidesPerView: 4,
                  },
                }}
              >
                {barVicini.map((block, index) => {
                  return (

                    <SwiperSlide key={index}>
                      <Article block={block} classList={'post post__card'} baseLink={`/${postType}`} pageType={postType} />
                    </SwiperSlide>
                  )
                })}

              </Swiper>
            </div>
          </section>
        ) : ''
      }
      {
        nearItinerari.length > 0 ? (

          <section className='morePost morePost--itinerari contentText'>
            <div className='morePost__wrap'>
              <div className='morePost__wrap__row'>
                <h3>Itinerari nelle vicinanze</h3>
              </div>
              <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  920: {
                    slidesPerView: 4,
                  },
                }}
              >
                {itinerariVicini.map((block, index) => {
                  return (

                    <SwiperSlide key={index}>
                      <Article block={block} classList={'post post__card'} baseLink={`/itinerari`} pageType={'itinerari'} />
                    </SwiperSlide>
                  )
                })}

              </Swiper>
            </div>
          </section>
        ) : ''
      }
      <Footer />
    </div>
  )
}




export async function getStaticPaths() {
  const paths = await getAllPostIds(postType + '?page=1&per_page=100')
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(postType + '?slug=' + params.id)
  const posts = await getSortedPostsData(postType + '?page=1&per_page=100')
  const itinerari = await getSortedPostsData('itinerari?page=1&per_page=100')
  return {
    props: {
      postData: postData[0],
      allPosts: posts,
      itinerari: itinerari
    }
  }
}   