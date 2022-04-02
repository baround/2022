import styles from './diario.module.scss'
import Link from 'next/link'
import Article from './article'
import React, { useState } from "react";
export const Arrow = () => (
  <svg height="9" width="15"  viewBox="0 0 9 15"> 
      <g fill="none">
          <g>
              <g transform="translate(-1400 -890) rotate(90 259 1149.5)">
                  <path fill="#1B3544" d="M7.09.007c-.159.023-.307.095-.423.207L.272 6.354c-.323.273-.365.757-.091 1.08.274.325.758.366 1.081.092.023-.02.045-.04.066-.062L7.195 1.83l5.867 5.635c.29.31.775.326 1.085.036.309-.29.325-.776.035-1.085-.02-.022-.042-.042-.065-.062L7.722.214c-.168-.161-.4-.238-.631-.207" mask="url(#3uhrfa6c0b)"/>
              </g>
          </g>
      </g>
  </svg>
)
export default function Diario({ content, postData, pinned }){
  const [secondPage, setSecondPage] = useState(false);
  function togglePage(){
    setSecondPage(!secondPage);
  }

  let postList = [...postData];
  let pinnedPost = pinned[0];
  let postIndex = postList.findIndex(post => post.id == pinnedPost.id);
  postList.splice(postIndex, 1);

  let firstSlidePost = [...postList].slice(0, 4);
  let secondSlidePost = [...postList].slice(4, 8);
  return (
    <section className={styles.diario}>
      <div className={styles.diario__wrap}>
        <div className={`${styles.diario__row} ${styles.diario__row_header}`}>
          <h2>
            <img src="/images/icon-news.svg" />
            <Link href="/diario">{content.titolo}</Link>
          </h2>
          <Link href="/diario">
            <a className={styles.cta}> 
              {content.titolo_link}
              <Arrow/>
            </a>
          </Link>
        </div>

        <div className={`${styles.diario__row} ${styles.diario__row_content}`}>
          <div className={`${styles.diario__col} ${styles.diario__col_list}`}>
            <div className={styles.diario__col__header}>
              <h3>{content.titolo_lista}</h3>
              <div className={styles.diario__slider__nav}>
                <img onClick={togglePage} className={`${styles.nav} ${styles.nav__prev} ${secondPage?styles.nav__active:styles.nav__inactive}`} src="/images/arrow-slim.png" />
                <img onClick={togglePage} className={`${styles.nav} ${styles.nav__next} ${secondPage?styles.nav__inactive:styles.nav__active}`} src="/images/arrow-slim.png" />
              </div>
            </div>
            <div className={`${styles.diario__slider} ${secondPage?styles.onSecondPage:styles.onFirstPage}`}>
              <div className={styles.diario__slider__slide} key="slide-1">
              {firstSlidePost.map((block, index) => {
                  return (
                    <Article block={block} classList={'post'} baseLink='/diario' key={index} />
                  )
              })}
              </div>
              <div className={styles.diario__slider__slide} key="slide-2">
              {secondSlidePost.map((block, index) => {
                  return (
                    <Article block={block} classList={'post'} baseLink='/diario' key={index} />
                  )
              })}
              </div>
            </div>
          </div>
          <div className={`${styles.diario__col} ${styles.diario__col_pinned}`}>
            <div className={styles.diario__col__header}>
              <h3>{content.titolo_evidenza}</h3>
            </div>
            <Article block={pinnedPost} classList={`${'post'} ${'post__pinned'}`} baseLink='/diario' />
          </div>
        </div>
      </div>
    </section>
  )
} 