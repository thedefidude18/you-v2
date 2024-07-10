import React, { useRef } from "react";
import styles from "./common.module.css";
function FormFirstStep() {
  const dragZone = useRef(null);
  function handleDragOver(e) {
    e.preventDefault();
    dragZone.current.classList.add(styles.dragOver);
  }
  function handleDragLeave(e) {
    e.preventDefault();
    dragZone.current.classList.remove(styles.dragOver);
  }
  function handleDrop(e) {
    e.preventDefault();
    dragZone.current.classList.remove(styles.dragOver);
    const file = e.dataTransfer.files;
  }
  return (
    <div className={styles.form_Cont}>
      <div className={styles.elemen_Cont}>
        <label className={styles.title__Lable}>Project name</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter your project name here"
        />
      </div>
      <div className={styles.elemen_Cont}>
        <label className={styles.title__Lable}>Project description</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter your project description here"
        />
      </div>
      <label className={styles.title__Lable}>Project description</label>
      <div
        ref={dragZone}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={styles.drag_Cont}
      >
        <p className={styles.title__Lable}>Png, gif, WEBP. Max 10MB</p>
        <label htmlFor="file_Up" className={styles.special_Label}>
          Select Image
        </label>
        <input type="file" id="file_Up" style={{ display: "none" }} />
      </div>
    </div>
  );
}

export default FormFirstStep;
