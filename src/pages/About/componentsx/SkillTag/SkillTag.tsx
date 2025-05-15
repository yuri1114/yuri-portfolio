import React from "react";
import styles from "./SkillTag.module.scss";

const SkillTag = () => {
  const data = [
    "Html",
    "Css",
    "Scss",
    "Style-components",
    "React",
    "Angular",
    "Javascript",
    "Typescript",
    "Figma",
    "Xd",
    "Photoshop",
    "Sketch",
  ];
  return (
    <div className={styles.tagContainer}>
      {data.map((item, index) => (
        <div className={styles.tag} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default SkillTag;
