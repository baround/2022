import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './component-summary.module.scss'


export default function Summary({ data }) {
  return (
    <section className={`${styles.summary}`}>
      <div className={`${styles.summary__wrap}`}>
        <h3>In questo itinerario:</h3>
        <ul>
          {data.acf.contenuto.map((block, index) => {
            if (block.acf_fc_layout == 'attivita') {
              let slug = block.titolo.toLowerCase().split(' ').join('-')
              return (
                <li key={index}>
                  <Link href={`#${slug}`} scroll={false}>
                    <a>{block.titolo}</a>
                  </Link>
                </li>
              )
            }
          })}
        </ul>
      </div>
    </section>
  )
} 