import './style.scss';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import swiperData from 'data/swiper';

import { useRef, useState } from 'react';

export const SwiperFeedback = () => {
  const [swiper, setSwiper] = useState();
  const prevRef = useRef();
  const nextRef = useRef();

  if (swiper) {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
  }

  return (
    <div className="swiper-feedback">
      <h2 className="title">Our coffee perfection feedback</h2>
      <p className="text-bottom">
        Our customers has amazing things to say about us
      </p>

      <div className="inner">
        <button className="swiper-button btn-prev" ref={prevRef}></button>
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef?.current,
            nextEl: nextRef?.current,
          }}
          spaceBetween={30}
          loop={true}
          onSwiper={setSwiper}
        >
          {swiperData.map(({ id, description, name, profession }) => (
            <SwiperSlide className="swiper-slide" key={id}>
              <blockquote>
                <p className="swiper-slide__text">{description}</p>
                <cite className="swiper-slide__name">{name}</cite>
                <p className="swiper-slide__subText">{profession}</p>
              </blockquote>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button btn-next" ref={nextRef}></button>
      </div>
    </div>
  );
};
