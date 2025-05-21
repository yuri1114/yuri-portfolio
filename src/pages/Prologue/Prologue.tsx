import styles from "./Prologue.module.scss";
import flower from "../../assets/img/floweer2.gif";
import leaf from "../../assets/img/light.gif";
import bada from "../../assets/img/bada2.gif";
import dog from "../../assets/img/my-profile.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Prologue = () => {
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();
  const goMenu = () => {
    setIsLeaving(true);
    setTimeout(() => {
      navigate("/menu");
    }, 1900);
  };

  return (
    <div
      onClick={goMenu}
      className={`${styles.background} ${isLeaving ? styles.slideOut : ""}`}
    >
      <div className={styles.textWrap}>
        <p className={styles.prologue}>PROLOGUE</p>
        <p className={styles.works} onClick={goMenu}>
          works !
        </p>
      </div>
      <div className={styles.section}>
        <div className={styles.flower}>
          <img src={flower} alt="flower" />
        </div>

        <div className={styles.leaf}>
          <img src={leaf} alt="leaf" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.bada}>
          <img src={bada} alt="leaf" />
        </div>

        <div className={styles.dog}>
          <img src={dog} alt="dog" />
        </div>
      </div>
    </div>
  );
};

export default Prologue;
