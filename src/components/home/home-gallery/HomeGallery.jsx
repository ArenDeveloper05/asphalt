import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../router/router";
import { MdKeyboardArrowRight } from "react-icons/md";

import "./HomeGallery.scss";

const HomeGallery = () => {
  const homeImages = useSelector((state) => state.images.homeImages);

  return (
    <div className="home-gallery">
      <h1 className="section-title">
        <Link to={ROUTER.GALLERY_PAGE_ROUTE}>
          Галерея работ
          <MdKeyboardArrowRight />
        </Link>
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        scrollbar={{ draggable: true }}
        slidesPerView={3}
        navigation
        clickable="true"
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          774: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1340: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {homeImages &&
          homeImages.map(({ id, description, src }) => {
            return (
              <SwiperSlide key={id}>
                {/* <div className="home-gallery-description">{description}</div> */}
                <div className="home-gallery-image">
                  <img src={src} alt="homeImg" />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default HomeGallery;
