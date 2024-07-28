import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";
function Button({ text, type, path, confirm = () => { } }) {
  return (
    <button className={styles.btn} onClick={confirm}>

      {text}
    </button>
  );
}

export default Button;
