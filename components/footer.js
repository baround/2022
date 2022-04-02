import styles from './footer.module.scss'
import Link from 'next/link'

export default function Footer({ content, postData, pinnedPost }){
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__social}>
            <a href="https://www.facebook.com/baroundit" target="_blank"><img src="/images/icon-facebook.svg" /></a>
            <a href="https://www.instagram.com/baround_" target="_blank"><img src="/images/icon-instagram.svg" /></a>
        </div>
        <div className={styles.footer__credits}>
            <a href="/chi-siamo">Chi siamo</a>
            <span className={styles.separator}>|</span>
            <a href="/contatti">Contatti</a>
            <span className={styles.separator}>|</span>
            <a href="/privacy-policy">Privacy</a>
        </div>
    </footer>
  )
} 