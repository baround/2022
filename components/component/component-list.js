import React, { useState } from "react";
import styles from './component-list.module.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function List({ data, counter }) {
  const [showMe, setShowMe] = useState(true);
  function toggle(){
    setShowMe(!showMe);
  }
  return (
    <div className={`${styles.list}`}>
      <span className={`${styles.list__showList} ${showMe?styles.inactive:styles.active}`} onClick={toggle}></span>
      <div className={`${styles.list__listing} ${showMe?styles.active:styles.inactive}`}>
        <span className={`${styles.list__close}`} onClick={toggle}></span>
        <div className={`${styles.list__listing__header}`}>
          <div className={`${styles.list__listing__header__counter}`}>
            48 bar a Milano
          </div>
          <h1>Ecco i bar che fanno per te!</h1>
        <span className={`${styles.list__showMap}`} onClick={toggle}>Scoprili sulla mappa</span>
        </div>
        <div className={`${styles.list__listing__content}`}>
          {data.map((block, index) => {
            return (
              <div className={`${styles.list__listing__content__row}`} key={index}>
                <figure>
                  <img src={block.acf.immagine_di_copertina} />
                </figure>
                <div className={`${styles.list__listing__content__row__text}`}>
                  <h2>
                    <Link href={'/locali/' + block.slug}>
                      <a dangerouslySetInnerHTML={{ __html: block.title.rendered }}></a>
                    </Link>
                  </h2>
                  <div className={`${styles.list__listing__content__row__text__price}`}>
                    {(block.acf.fascia_di_prezzo == 'alto') ? (<span>€€€</span>) : null}
                    {(block.acf.fascia_di_prezzo == 'medio') ? (<span>€€</span>) : null}
                    {(block.acf.fascia_di_prezzo == 'basso') ? (<span>€</span>) : null}
                  </div>
                  {/* <span className={`${styles.list__listing__content__row__text__type}`}>{block.acf.tipo.join(', ')}</span> */}
                  <span className={`${styles.list__listing__content__row__text__type}`}>{block.acf.tipo}</span>
                  <span  className={`${styles.list__listing__content__row__text__address}`}>{block.acf.indirizzo.address}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 