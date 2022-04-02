import React, { useState, useEffect } from 'react'
import styles from './component-intro.module.scss'
import Image from 'next/image'
import Share from './component-share'

export default function Intro({ data, coverImage, title }) {
  const [hasCover, setCover] = useState(undefined)

  useEffect(() => {
    const updateCover = () => {
      setCover(coverImage ? true : false)
    }
    updateCover()
  }, [])
  return (
    <div className={`${styles.intro} ${!hasCover ? styles.noCover : styles.withCover}`}>
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
        <div className={`${styles.titleSection} contentText `}>
          <div className={`${styles.content} `}>
            <h1>
              <span dangerouslySetInnerHTML={{ __html: title }}></span>
            </h1>
            {hasCover ? (
              <Share color='white' />
            ) : ''}
          </div>
        </div>
      </div>
      <div className={`${styles.copy} contentText introSection`}>
        <div className={`${styles.content} `}>
          <span dangerouslySetInnerHTML={{ __html: data.contenuto }}></span>
        </div>
      </div>
    </div>
  )
} 