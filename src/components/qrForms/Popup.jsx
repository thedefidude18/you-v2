import React from 'react'
import styles from "./common.module.css";
const Popup = ({ formData = {}, setFormData = () => { } }) => {
  return (
    <div className={styles.form_Cont}>
    <div className={styles.elemen_Cont}>
      <label className={styles.title__Lable}>Project target</label>
      <input
        type="text"
        className={styles.input}
        value={formData.target}
        onChange={(e) => {
          setFormData({
            ...formData,
            target: e.target.value
          })
        }}
        placeholder="Enter your target"
      />
    </div>
  </div>
  )
}

export default Popup
