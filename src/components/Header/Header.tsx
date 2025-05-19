import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import MenuBtn from "../MenuBtn/MenuBtn";
import ModeToggle from "../ModeToggle/ModeToggle";

const Header = () => {
  return (
    <div className={styles.header}>
      <MenuBtn />
      <ModeToggle />
    </div>
  );
};

export default Header;
