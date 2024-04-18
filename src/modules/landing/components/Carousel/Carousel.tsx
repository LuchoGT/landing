import './Carousel.scss'
import 'swiper/css';
import { Carousel1 } from '@/assets/icon/LandingCarousel/Carousel1'
import { Carousel2 } from '@/assets/icon/LandingCarousel/Carousel2'
import { Carousel3 } from '@/assets/icon/LandingCarousel/Carousel3'
import { Carousel4 } from '@/assets/icon/LandingCarousel/Carousel4'
import { Carosuel5 } from '@/assets/icon/LandingCarousel/Carosuel5'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

export const Carousel = () => {

  const iconos = [<Carousel1/>,<Carousel2/>,<Carousel3/>,<Carousel4/>,<Carosuel5/>]
  return (
    <div className="carousel__container">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480:{
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768:{
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024:{
            slidesPerView: 4,
            spaceBetween: 15,
          }
        }}
      >
        <div>
          {
            iconos.map((icon, i) => (
              <SwiperSlide key={i}>
                {icon}
              </SwiperSlide>
            ))
          }
        </div>
      </Swiper>
    </div>
  )
}
