import { useNavigate } from "react-router-dom";
import styles from "../../Menu.module.scss";

const MenuItem = ({
  title,
  isVisible,
  rightContent,
  path,
}: {
  title: string;
  isVisible: boolean;
  rightContent: React.ReactNode;
  path: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className={styles.menuRow}>
      <div className={`${styles.menu} ${isVisible ? styles.slideLeft : ""}`}>
        {title}
      </div>
      <div
        className={`${styles.menuRight} ${isVisible ? styles.slideRight : ""}`}
        onClick={() => {
          navigate(`/${path}`);
        }}
      >
        {rightContent}
      </div>
    </div>
  );
};

export default MenuItem;
