import styles from "./Works.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import MenuBtn from "../../components/MenuBtn/MenuBtn";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WorksSlideItem from "./Components/WorksSlideItem/WorksSlideItem";

const Works = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={80}
          slidesPerView={1.6}
          navigation
          loop
        >
          <SwiperSlide>
            <WorksSlideItem />
          </SwiperSlide>

          <SwiperSlide>
            <WorksSlideItem />
          </SwiperSlide>

          <SwiperSlide>
            <WorksSlideItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
