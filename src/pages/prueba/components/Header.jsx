import React from "react";
import styles from "../prueba.module.css";
const Header = () => {
  const reactLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png";
  return (
    <div className={styles.HeaderWrapper}>
      <h1 className={styles.MainTitle}>Prueba Tecnica de React</h1>
      <img src={reactLogo} alt="React Logo" className={styles.Logo} />
    </div>
  );
};

export default Header;
