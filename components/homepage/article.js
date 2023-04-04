import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
export default function Article(props) {
  const block = props.block;
  const classList = props.classList;
  const [putCta, setCta] = useState(false)
  useEffect(() => {
    const updateCta = () => {
      setCta((props.pageType == 'diario') ? true : false)
    }
    updateCta()
  }, [])
  return (
    <article className={classList}>
      <figure className={'post__image'}>
        <Link href={props.baseLink + '/' + block.slug}>
          <a className={'post__image__link'}>
            <Image
              priority
              src={block.acf.immagine_di_copertina}
              layout="fill"
              objectFit="cover"
              alt='baround'
            />
          </a>
        </Link>
      </figure>
      <div className={`${'post__content'} post__content`}>
        <h4>
          <Link href={props.baseLink + '/' + block.slug}>
            <a dangerouslySetInnerHTML={{ __html: block.title.rendered }}></a>
          </Link>
        </h4>
        {
          (props.pageType == 'locali') ? (
            <>
              <div className="price">
                { (block.acf.fascia_di_prezzo == 'alto') ? (<span>€€€</span>) : null }
                {(block.acf.fascia_di_prezzo == 'medio') ? (<span>€€</span>) : null}
                {(block.acf.fascia_di_prezzo == 'basso') ? (<span>€</span>) : null}
              </div>
              {/* <span className='type'>{block.acf.tipo.join(', ')}</span> */}
              <span className='type'>{Array.isArray(block.acf.tipo) ? block.acf.tipo.join(', ') : block.acf.tipo}</span>
              <span className='address'>{block.acf.indirizzo.address}</span>
            </>
          ) : ''
        }
        {block.acf.contenuto.map((content, index) => {
          if (props.pageType == 'locali') {
            return
          } else {
            if (content.acf_fc_layout == 'introduzione') {
              return (
                <div className={`${'post__content__text'} post__content__text`} dangerouslySetInnerHTML={{ __html: content.contenuto }} key={index}></div>
              )
            }
          }
        })}
        {putCta ? (
          <span className={`cta_readMore`}>
            <Link href={props.baseLink + '/' + block.slug}>
              ...continua a leggere
            </Link>
          </span>
        ) : ''}
      </div>
    </article>
  )
}