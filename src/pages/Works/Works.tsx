import styles from "./Works.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WorksSlideItem from "./Components/WorksSlideItem/WorksSlideItem";
import { projects } from "../../data/projects";

const Works = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={80}
          slidesPerView={2}
          navigation
          loop
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.3,
            },
            1024: {
              slidesPerView: 1.5,
            },
          }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={project.title}>
              <WorksSlideItem project={project} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
