import React from "react";
import styles from "./VotingElement.module.css";
function VotingElement({ image, title, votNum }) {
  return (
    <div className={styles.element__cont}>
      <div className={styles.first_Row}>
        <img src={image} alt="" />
        <p>{title}</p>
      </div>
      <h4>{votNum}</h4>
    </div>
  );
}

export default VotingElement;
