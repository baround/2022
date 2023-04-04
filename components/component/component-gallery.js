import Link from 'next/link'
import styles from './component-gallery.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Gallery({ data }) {
  return (
      <section className={`${styles.gallery} gallery`}>
        <div className={`${styles.gallery__wrapper}`}>
          <Swiper
            className={`${styles.gallery__slider}`}
            modules={[Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
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