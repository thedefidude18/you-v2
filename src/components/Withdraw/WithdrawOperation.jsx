import React from "react";
import styles from "./withdrawOperation.module.css";
function WithdrawOperation({withdraw}) {
  return (
    <div className={styles.wdraw_oper_cont}>
      <img src={withdraw.project.coverURL} alt="" />
      <div className={styles.content}>
        <div className={styles.first_Row}>
          <h4>{withdraw.project.title}</h4>
          <p>
            Votes: <span>{withdraw.voteNum}</span>
          </p>
        </div>
        <p>
          Amount:
          <span className={styles.price}>${withdraw.reqAmount}</span>
        </p>
      </div>
    </div>
  );
}

export default WithdrawOperation;
