import React from "react";
import styles from "./Notion.module.scss";

const Notion = () => {
  const openNotion = () => {
    window.open(
      "https://three-hamster-1bb.notion.site/JANG-YURI-334564ac85b34aab991762332c21eeb4?pvs=4",
      "_blank"
    );
  };

  return (
    <button className={styles.notionBtn} onClick={openNotion}>
      자기소개 보러가기
    </button>
  );
};

export default Notion;
