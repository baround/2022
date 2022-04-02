import Link from 'next/link'
import styles from './component-gallery.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Gallery({ data }) {
  return (
      <section className={`${styles.gallery} gallery`}>
        <div className={`${styles.gallery__wrapper}`}>
          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              920: {
                slidesPerView: 2,
              },
            }}
          >
            {data.gallery.map((block, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className={`${styles.gallery__wrapper__slide}`}>
                    <img src={block.immagine} />
                  </div>
                </SwiperSlide>
              )
            })}

          </Swiper>
        </div>
      </section>
  )
} 