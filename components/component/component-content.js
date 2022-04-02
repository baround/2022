import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './component-content.module.scss'

export default function Content({ data }) {


  return (
    <div className={`${styles.content}`}>
      <div className={`${styles.copy} contentText`}>
        <div className={`${styles.copy__row}`} dangerouslySetInnerHTML={{ __html: data.contenuto }}></div>
      </div>
    </div>
  )
} 