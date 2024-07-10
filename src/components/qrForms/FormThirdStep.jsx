import React from "react";
import styles from "./common.module.css";
function FormThirdStep() {
  const inputs = [
    {
      icon: "/svgs/proj/icon1.svg",
      label: " Project website",
    },
    {
      icon: "/svgs/proj/Discord.svg",
      label: "Discord",
    },
    {
      icon: "/svgs/proj/X.svg",
      label: "X Link",
    },
    {
      icon: "/svgs/proj/Github.svg",
      label: "Git Hub",
    },
  ];
  return (
    <div className={styles.form_Cont}>
      {inputs.map((item, index) => (
        <div className={styles.elemen_Cont} key={index}>
          <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
            <img src={`${item.icon}`} width={"24px"} alt="" />{" "}
            <label className={styles.title__Lable} style={{ margin: 0 }}>
              {item.label}
            </label>
          </div>
          <input type="url" className={styles.input} placeholder="https://" />
        </div>
      ))}
    </div>
  );
}

export default FormThirdStep;
