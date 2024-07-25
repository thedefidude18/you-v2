import React, { useState } from "react";
import styles from "./common.module.css";
import { Modal, Button } from 'react-bootstrap';
import Popup from "./Popup";
import { Dialog } from "@mui/material";
function FormSecondStep({ formData = {}, setFormData = () => { } }) {
  const [open, setOpen] = useState(false);
  const data = [
    {
      title: "Target Based",
      desc: "This option enables you to set a target. Withdrawal request can be done anytime provided you have reached your proposed milestone.Please note: request withdrawal is not based on target but based on votes."
    },
    {
      title: "Instant Withdrawal",
      desc: "This option allows you to withdraw your grant donations at any time, without the necessity of reaching a predefined target or meeting the 20% vote threshold."
    }
  ]
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.form_Cont}>
      {data.map((item, index) => (
        <div key={index}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: 10 }}>
            <label htmlFor={item.title} >{item.title}</label>
            <div>
              <input type="radio" id={`radio-${index}`} name="option" checked={ ((index == 0 && formData.target > 0) || (index == 1 && formData.target == 0)) ? true : false } className={styles.radio_input} />
              <label htmlFor={`radio-${index}`} className={styles.custom_radio} onClick={() => {
                if (index === 0) {
                  setOpen(true)
                } else {
                  setFormData({
                    ...formData,
                    target: 0
                  })
                }
              }}></label>
            </div>
          </div>
          <div className={styles.des_box}>
            <p >{item.desc}</p>
          </div>
        </div>
      ))}
      <Dialog open={open} onClose={handleClose}>
        <Popup formData={formData} setFormData={setFormData} />
      </Dialog>
    </div>
  );
}

export default FormSecondStep;
