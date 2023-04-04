import Image from 'next/image'
import styles from './itinerari.module.scss'
import Link from 'next/link'
import Article from './article'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Arrow = () => (
  <svg height="9" width="15"  viewBox="0 0 9 15">
      <g fill="none">
          <g>
              <g transform="translate(-1400 -890) rotate(90 259 1149.5)">
                  <path fill="#1B3544" d="M7.09.007c-.159.023-.307.095-.423.207L.272 6.354c-.323.273-.365.757-.091 1.08.274.325.758.366 1.081.092.023-.02.045-.04.066-.062L7.195 1.83l5.867 5.635c.29.31.775.326 1.085.036.309-.29.325-.776.035-1.085-.02-.022-.042-.042-.065-.062L7.722.214c-.168-.161-.4-.238-.631-.207" mask="url(#3uhrfa6c0b)"/>
              </g>
          </g>
      </g>
  </svg>
)
export default function Itinerari({ content, postData }){
  return (
    <section className={styles.itinerari}>
      <div className={styles.itinerari__wrap}>
        <div className={`${styles.itinerari__row} ${styles.itinerari__row_header}`}>
          <h2>
              <img src="/images/icon-itinerari-blue.svg" />
              <Link href="/itinerari">{content.titolo}</Link> 
          </h2>
          <Link href="/itinerari">
            <a className={styles.cta}> 
              {content.titolo_link}
              <Arrow/>
            </a>
          </Link>
        </div>
      </div>

      <div className={`${styles.itinerari__row} ${styles.itinerari__row_content}`}>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              920: {
                slidesPerView: 4,
              },
            }}
            // loop={true}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {postData.map((block, index) => {
                return (
                  
                  <SwiperSlide key={index}>
                    <Article block={block} classList={'post post__card'} baseLink='/itinerari' />
                  </SwiperSlide>
                )
            })}

          </Swiper>
          
        </div>
    </section>
  )
} 