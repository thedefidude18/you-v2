import React from 'react'
import styles from "./common.module.css";
const Popup = () => {
  return (
    <div className={styles.form_Cont}>
    <div className={styles.elemen_Cont}>
      <label className={styles.title__Lable}>Project target</label>
      <input
        type="text"
        className={styles.input}
        placeholder="Enter your target"
      />
    </div>
    <div className={styles.elemen_Cont}>
      <label className={styles.title__Lable}>Choose Date</label>
      <input type="date" className={styles.input} placeholder="11/08/2050" />
    </div>
  </div>
  )
}

export default Popup
