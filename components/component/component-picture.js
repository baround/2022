import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './component-picture.module.scss'


export default function Picture({ data }){
  const [isFullscreen, setSize] = useState(undefined)
  
  useEffect(() => {
    const updateSize = () => {
      setSize((data.dimensione_immagine == 'fullscreen') ? true : false)
    }
    updateSize()
  }, [])

  return (
    <section className={`${styles.picture}`}>
      {isFullscreen ? (
        <div className={`${styles.picture__fullscreen}`}>
          <img src={data.immagine}/>
        </div>
        ) : 
        (
        <div className={`${styles.picture__normale}`}>
          <img src={data.immagine}/>
        </div>
        )
        }
    </section>
  )
} 