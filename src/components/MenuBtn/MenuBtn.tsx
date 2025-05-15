import styles from "./MenuBtn.module.scss";
import { useNavigate } from "react-router-dom";

const MenuBtn = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/menu")} className={styles.menuBtn}>
      MENU
    </div>
  );
};

export default MenuBtn;
