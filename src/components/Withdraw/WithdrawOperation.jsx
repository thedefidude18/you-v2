import React from "react";
import styles from "./withdrawOperation.module.css";
function WithdrawOperation() {
  return (
    <div className={styles.wdraw_oper_cont}>
      <img src="/profile.jpeg" alt="" />
      <div className={styles.content}>
        <div className={styles.first_Row}>
          <h4>GAMEION</h4>
          <p>
            Votes: <span>50</span>
          </p>
        </div>
        <p>
          Amount:
          <span className={styles.price}>$200</span>
        </p>
      </div>
    </div>
  );
}

export default WithdrawOperation;
