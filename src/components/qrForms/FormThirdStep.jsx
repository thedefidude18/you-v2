import React from "react";
import styles from "./common.module.css";
function FormThirdStep({ formData = {}, setFormData = () => { } }) {
  const inputs = [
    {
      icon: "/svgs/proj/icon1.svg",
      label: " Project website",
      value: formData.websiteURL,
      setValue: (e) => setFormData({
        ...formData,
        websiteURL: e.target.value,
      })
    },
    {
      icon: "/svgs/proj/X.svg",
      label: "X Link",
      value: formData.socialURL,
      setValue: (e) => setFormData({
        ...formData,
        socialURL: e.target.value,
      })
    },
    {
      icon: "/svgs/proj/Github.svg",
      label: "Git Hub",
      value: formData.githubURL,
      setValue: (e) => setFormData({
        ...formData,
        githubURL: e.target.value,
      })
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
          <input type="url" className={styles.input} value={item.value} onChange={item.setValue} placeholder="https://" />
        </div>
      ))}
    </div>
  );
}

export default FormThirdStep;
