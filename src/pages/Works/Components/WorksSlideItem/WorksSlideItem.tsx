import React from "react";
import styles from "./WorksSlideItem.module.scss";
import test from "../../../../assets/img/bada.gif";

const WorksSlideItem = () => {
  return (
    <div className={styles.item}>
      <div className={styles.topTitle}>
        <p className={styles.projectTitle}>
          PORTFOLIO <br />: jang yuri
        </p>

        <p className={styles.number}>01</p>
      </div>
      <div className={styles.imgContainer}>
        <img src={test} alt="테스트이미지" />
      </div>

      <div className={styles.bottomInfo}>
        <p className={styles.short}>짧은 설명글~~~ </p>
        <div className={styles.skillTag}>
          <p className={styles.skill}>React</p>
        </div>
      </div>
    </div>
  );
};

export default WorksSlideItem;
