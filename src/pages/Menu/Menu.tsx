import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import who from "../../assets/img/who-icon.png";
import MenuItem from "./components/MenuItem/MenuItem";

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.align}>
        <MenuItem
          title="WHO IS SHE"
          isVisible={isVisible}
          path={"about"}
          rightContent={
            <div className={styles.imgWho}>
              <img src={who} alt="who is she" />
            </div>
          }
        />

        <MenuItem
          title="PROJECTS"
          isVisible={isVisible}
          path={"project"}
          rightContent={
            <div className={styles.flexWarp}>
              <div className={styles.imgContainer}></div>
              <div className={styles.imgContainer}></div>
              <div className={styles.imgContainer}></div>
            </div>
          }
        />

        <MenuItem
          title="CONTACT"
          isVisible={isVisible}
          path={"contact"}
          rightContent={
            <div className={styles.img}>
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.0501 0.88841C47.3516 -0.0283645 48.6484 -0.0283634 48.9499 0.888411L60.2166 35.1459C60.3158 35.4476 60.5524 35.6842 60.8541 35.7834L95.1116 47.0501C96.0284 47.3516 96.0284 48.6484 95.1116 48.9499L60.8541 60.2166C60.5524 60.3158 60.3158 60.5524 60.2166 60.8541L48.9499 95.1116C48.6484 96.0284 47.3516 96.0284 47.0501 95.1116L35.7834 60.8541C35.6842 60.5524 35.4476 60.3158 35.1459 60.2166L0.88841 48.9499C-0.0283645 48.6484 -0.0283634 47.3516 0.888411 47.0501L35.1459 35.7834C35.4476 35.6842 35.6842 35.4476 35.7834 35.1459L47.0501 0.88841Z"
                  fill="white"
                />
              </svg>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Menu;
