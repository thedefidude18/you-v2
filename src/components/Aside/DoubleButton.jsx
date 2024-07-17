import React, { useContext } from "react";
import styles from "./Double.module.css";
import { sharedState } from "@/app/layout";

function DoubleButton() {
  const stateRecived = useContext(sharedState);
  const { setIsContributer, isContributer } = stateRecived;

  return (
    <div className={styles.cont}>
      <button
        className={`${styles.left_btn} ${styles.btn} ${isContributer ? styles.btn_background : styles.btn_background1}`}
        onClick={() => setIsContributer(true)}
      >
        Contributor
      </button>
      <button
        className={`${styles.right_btn} ${styles.btn} ${!isContributer ? styles.btn_background : styles.btn_background1}`}
        onClick={() => setIsContributer(false)}
      >
        Creator
      </button>
    </div>
  );
}

export default DoubleButton;
