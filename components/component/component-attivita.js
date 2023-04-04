import styles from './component-content.module.scss'

export default function Attivita({ data }) {
  var slug = Array.isArray(data.titolo.toLowerCase().split(' ')) ? data.titolo.toLowerCase().split(' ').join('-') : data.titolo;
  return (
    <div className={`${styles.content}`}>
      <span id={slug} className="scrollTrigger"></span>
      <div className={`${styles.copy} contentText`}>
        <h4>{data.titolo}</h4>
        <span className={`${styles.copy__address}`}>{data.indirizzo.address}</span>
        <span dangerouslySetInnerHTML={{ __html: data.contenuto }}></span>
      </div>
    </div>
  )
} 