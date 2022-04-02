import styles from './header.module.scss'
import Navigation from './navigation';
import React, { useState } from "react";
import Link from 'next/link'

export default function Header({ content, postData, pinnedPost }){
  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <header className={styles.header}>
        <div className={styles.strip}>
          <Link href="/">
            <a>
              <img className={styles.logo} src="/images/logo-baround-white.png" width="157" />   
            </a>
          </Link>
          <div className={`${styles.burger}`} onClick={toggle}>
            <span className={`${styles.burger__line} ${showMe?styles.active:styles.inactive}`}></span>
            <span className={`${styles.burger__line} ${showMe?styles.active:styles.inactive}`}></span>
            <span className={`${styles.burger__line} ${showMe?styles.active:styles.inactive}`}></span>
          </div>
        </div>
        <Navigation classList={showMe?styles.active:styles.inactive} />
    </header>
  )
} 