import React, { useState, useEffect } from 'react'
import styles from './component-intro.module.scss'
import Image from 'next/image'
import Share from './component-share'

export default function IntroLocale({ data, coverImage, title }) {
  const [hasCover, setCover] = useState(undefined)

  useEffect(() => {
    const updateCover = () => {
      setCover(coverImage ? true : false)
    }
    updateCover()
  }, [])
  return (
    <div className={`${styles.intro} ${styles.intro__locale} ${!hasCover ? styles.noCover : styles.withCover}`}>
      <div className={`${styles.background}`}>
        {hasCover ? (
          <Image
            priority
            src={coverImage}
            layout="fill"
            height={742}
            width={1060}
            alt='baround'
            objectFit='cover'
            objectPosition="center center"
          />
        ) : ''}
        <div className={`${styles.titleSection} ${styles.titleSection__locale} contentText `}>
          <div className={`${styles.content} `}>
            <h1>
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h1>
            <div className={`${styles.content__details} `}>

              <div className={styles.price}>
                { (data.acf.fascia_di_prezzo == 'alto') ? (<span>€€€</span>) : null }
                {(data.acf.fascia_di_prezzo == 'medio') ? (<span>€€</span>) : null}
                {(data.acf.fascia_di_prezzo == 'basso') ? (<span>€</span>) : null}
              </div>
              <span className={styles.type}>{Array.isArray(data.acf.tipo) ? data.acf.tipo.join(', ') : data.acf.tipo}</span>
              <span className={styles.address}>{data.acf.indirizzo.address}</span>
            </div>
            {hasCover ? (
              <Share color='white' />
            ) : ''}
          </div>
        </div>
      </div>
      <div className={`${styles.copy} contentText introSection`}>
      </div>
    </div>
  )
} 