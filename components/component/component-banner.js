import Link from 'next/link'
import Image from 'next/image'
import styles from './component-banner.module.scss'
export default function Banner({ data }){
  return (
    <section className={`${styles.banner}`}>
      <div className={`${styles.banner__wrapper}`}>
        <Link href={data.link}>
            <a target="_blank">
              <Image
                  priority
                  src={data.banner}
                  layout="responsive"
                  height={90}
                  width={728}
                  alt='baround'
              />
            </a>
        </Link>
      </div>
    </section>
  )
}  