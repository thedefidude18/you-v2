import React from "react";
import Button from "../Button/Button";
import styles from "./SuccessStyle.module.css";
function SuccessCard() {
  return (
    <div className={styles.card_Cont}>
      <img src="/svgs/qf/congrats.svg" alt="icon" />
      <h2>Congratulations!!</h2>
      <p>You have successfully created a project</p>
      <Button type="link" text="View Project" path="#" />
    </div>
  );
}

export default SuccessCard;
