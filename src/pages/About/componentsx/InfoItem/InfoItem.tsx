import styles from "./InfoItem.module.scss";

import SkillTag from "../SkillTag/SkillTag";

const InfoItem = () => {
  return (
    <div className={styles.infoItem}>
      <p className={styles.whoText}>
        WHO IS <br /> SHE ?
      </p>

      <div className={styles.info}>
        <p>1993.03.03</p>
        <p>Tel.010-7770-0310</p>
        <p>Email.jyuri1114@naver.com</p>
      </div>

      <SkillTag />
    </div>
  );
};

export default InfoItem;
