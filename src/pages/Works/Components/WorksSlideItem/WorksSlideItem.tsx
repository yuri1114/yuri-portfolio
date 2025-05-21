import React from "react";
import styles from "./WorksSlideItem.module.scss";
import test from "../../../../assets/img/bada.gif";
import { Project } from "../../../../model/Project";

interface WorksSlideItemProps {
  project: Project;
  index: number;
}

const WorksSlideItem = ({ project, index }: WorksSlideItemProps) => {
  return (
    <a href={project.notionLink} target="_blank" rel="noopener noreferrer">
      <div className={styles.item}>
        <div className={styles.topTitle}>
          <p className={styles.projectTitle}>
            PORTFOLIO <br />: {project.title}
          </p>

          <p className={styles.number}>{String(index + 1).padStart(2, "0")}</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={project.image} alt={`${project.title} 썸네일`} />
        </div>

        <div className={styles.bottomInfo}>
          <p className={styles.short}>{project.description}</p>
          <div className={styles.skillTag}>
            {project.tags.map((tag) => (
              <p key={tag} className={styles.skill}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default WorksSlideItem;
