import Link from 'next/link'
import styles from './component-video.module.scss'
export default function Video({ data }){
  return (
    <section className={`${styles.video}`}>
      <div className={`${styles.video__wrapper}`} dangerouslySetInnerHTML={{ __html: data.video }}>
      </div>
    </section>
  )
} 