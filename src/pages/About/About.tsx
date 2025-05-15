import styles from "./About.module.scss";
import about from "../../assets/img/about.jpg";
import hehe from "../../assets/img/hehe.jpg";
import TextWrap from "./componentsx/TextWrap/TextWrap";
import InfoItem from "./componentsx/InfoItem/InfoItem";
import MenuBtn from "../../components/MenuBtn/MenuBtn";
import { useEffect, useState } from "react";
const About = () => {
  const [isRoade, setIsRoade] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsRoade(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="commonLayout">
      <MenuBtn />
      <div
        className={`${styles.layout} ${styles.roade} ${
          isRoade ? styles.active : ""
        }`}
      >
        <TextWrap />

        <div className={styles.bottomLayout}>
          <div className={styles.flexWrap}>
            <div className={styles.leftImg}>
              <img src={about} alt="about img" />
            </div>

            <InfoItem />
          </div>

          <div className={styles.flexWrap}>
            <div className={styles.infoItem}>
              망설이지 않고 나아가는, <br />
              결국에는 해내고야 마는 사람. <br />
              <br />
              기획자가 의도한바를 이해하고, 소통합니다. <br /> 디자이너의 새로운
              도전을
              <br /> 즐거운 마음으로 기꺼이 함께 합니다.
              <br />
              <br />
              어려운건 있어도 불가능한건 없다.
              <br />
              막혔을 땐 해결책을 찾아냅니다.
            </div>

            <div className={styles.rightImg}>
              <div className={styles.character}>
                <p>ENTP</p>
                <p>
                  희: 희희 <br /> 망: 망해도 또 해
                </p>
              </div>
              <img src={hehe} alt="about imgs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
