import { useState } from "react";
import styles from "./Counter.module.scss";

function Counter(props) {
  const { count } = props;

  return (
    <>
      <div className={styles["counter__main-count"]}>{count}</div>
    </>
  );
}

export default Counter;
