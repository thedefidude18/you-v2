import React from "react";
import styles from "./Double.module.css";

function DoubleButton() {
  return (
    <div className={styles.cont}>
      <button className={styles.left_btn + " " + styles.btn}>
        Contributor
      </button>
      <button className={styles.right_btn + " " + styles.btn}>Creator</button>
    </div>
  );
}

export default DoubleButton;
