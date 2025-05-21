import React, { useEffect, useState } from "react";
import styles from "./ModeToggle.module.scss";

const ModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button className={styles.toggleButton} onClick={toggleTheme}></button>
  );
};

export default ModeToggle;
