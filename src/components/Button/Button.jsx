import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";
function Button({ text, type, path, color }) {
  if (type) {
    return (
      <Link
        className={styles.btn}
        href={path}
        style={{
          height: "40px",
          padding: `${color ? "10px 18px" : "10px 26px"}`,
          background: `${color && color}`,
        }}
      >
        {text}
      </Link>
    );
  } else {
    return (
      <button className={styles.btn} onClick={console.log("Alaa Ayaad")}>
        {text}
      </button>
    );
  }
}

export default Button;
