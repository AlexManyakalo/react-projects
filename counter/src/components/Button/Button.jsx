import { useState } from "react";
import styles from "./Button.module.scss";

function Button(props) {
  const { char, countCounter } = props;
  return (
    <>
      <button className={styles["counter__main-btn"]} onClick={countCounter}>{char}</button>
    </>
  );
}

export default Button;
