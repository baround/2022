import Link from 'next/link'
import styles from './component-share.module.scss'
import {useRouter} from "next/router";

export const Facebook = (props) => (
  (props.type == 'blue') ? (
    <img src="/images/icon-share-facebook-blue.svg" />
  ) : (
    <img src="/images/icon-share-facebook-white.svg" />
  ) 
)
export const Whatsapp = (props) => (
    (props.type == 'blue') ? (
      <img src="/images/icon-share-whatsapp-blue.svg" />
    ) : (
      <img src="/images/icon-share-whatsapp-white.svg" />
    ) 
)
export default function Share({ color }){
  const router = useRouter();
  const thisUrl = `https://2022-baround.vercel.app${router.asPath}`;
  return (
    <section className={`${styles.share} share share--${color}`}>
      <div className={`${styles.share__wrapper}`}>
        <div className={`${styles.share__wrapper__row}`}>
          <h5>Condividi:</h5>
        </div>
        <div className={`${styles.share__wrapper__row}`}>
          <Link href={`https://www.facebook.com/sharer/sharer.php?u=${thisUrl}`}>
            <a className={`${styles.share__icon}`} target="_blank" rel="noreferrer"><Facebook type={color} /></a>
          </Link>
          <Link href={`whatsapp://send?text=${thisUrl}`}>
            <a className={`${styles.share__icon}`} target="_blank" rel="noreferrer" data-action="share/whatsapp/share" onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;" title="Share on whatsapp"><Whatsapp type={color} /></a>
          </Link>
        </div>
      </div>
    </section>
  )
} 