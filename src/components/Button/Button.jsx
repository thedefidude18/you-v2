import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";
function Button({ text = "", type = null, path = null, color = null, confirm = () => { } }) {
  if (type) {
    return (
      <Link
        className={styles.btn}
        href={path}
        style={{
          height: "42px",
        }}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={confirm}>
        {text}
      </button>
    );
  }
}

export default Button;
