import React from "react";
import WithdrawOperation from "./WithdrawOperation";
import styles from "./witdraw.module.css";
function Withdraw() {
  return (
    <div className={styles.withdraw_Card}>
      <h3>Recent Withdrawals</h3>
      <WithdrawOperation />
      <WithdrawOperation />
      <WithdrawOperation />
      <WithdrawOperation />
      <WithdrawOperation />
    </div>
  );
}

export default Withdraw;
