import Image from 'next/image'
import styles from './hero.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import Link from 'next/link'

export default function Hero({ content }){
  return (
    <div className={styles.hero}>
      <div className={styles.background}>
        <Image
          priority
          src={content.immagine}
          // className='background'
          layout="fill"
          height={742}
          width={1060}
          alt='baround'
        />
      </div>
    <div className={styles.copy}>
      <img className={styles.logo} src="/images/logo-baround-white.png" />     
      <span dangerouslySetInnerHTML={{ __html: content.titolo}}></span>
      <div className={styles.navigation}>
        <Link href="/diario">
          <a>
            <figure>
                <img className={styles.icon} src="/images/icons-whatsup.svg" />
            </figure>
            <span>Diario</span>
          </a>
        </Link>
        <Link href="/locali">
          <a>
            <figure>
                <img className={styles.icon} src="/images/icons-bar.svg" />
            </figure>
            <span>Bar</span>
          </a>
        </Link>
        <Link href="/itinerari">
          <a>
            <figure>
                <img className={styles.icon} src="/images/icons-itinerari.svg" />
            </figure>
            <span>Itinerari</span>
          </a>
        </Link>
      </div>
    </div>
    
    </div>
  )
} 