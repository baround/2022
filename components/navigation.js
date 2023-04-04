import Image from 'next/image'
import styles from './header.module.scss'
import Link from 'next/link'
const rgbDataURL = (r, g, b) => `data:image/gif;base64,R0lGODlhAQABAPAA/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export default function Navigation({ classList }){
  return (
    <nav className={`${styles.menu} ${classList}`}>
      <Image
        priority
        src='/images/bg-menu.jpg'
        className={styles.background}
        layout="fill"
        placeholder="blur"
        blurDataURL={rgbDataURL(0, 0, 0)}
        height={742}
        width={1060}
        alt='baround'
        objectFit="cover"
      />
      <div className={styles.menu__block}>
        <div className={styles.menu__row}>
            <img className={styles.icon} src="/images/icon-baround-white.png"/>
        </div>
        <ul>
          <li>
            <Link href="/chi-siamo">
              <a>Chi siamo</a>
            </Link>
          </li>
          <li>
            <Link href="/locali">
              <a>Bar</a>
            </Link>
          </li>
          <li>
            <Link href="/itinerari">
              <a>Itinerari</a>
            </Link>
          </li>
          <li>
            <Link href="/diario">
              <a>Diario</a>
            </Link>
          </li>
          <li>
            <Link href="/contatti">
              <a>Contatti</a>
            </Link>
          </li>
        </ul>
        <div className={styles.menu__row}>
          <div className={styles.menu__row__social}>
            <a href="" target="_blank">
              <img className={styles.icon__fb} src="/images/icon-facebook.svg"/>
            </a>
            <a href="" target="_blank">
              <img className={styles.icon__ig} src="/images/icon-instagram.svg"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 