import React from "react";
import WithdrawOperation from "./WithdrawOperation";
import styles from "./witdraw.module.css";
function Withdraw({withdrawals = []}) {
  return (
    <div className={styles.withdraw_Card}>
      <h3>Recent Withdrawals</h3>

      {withdrawals.map((withdraw, index) => (
        <WithdrawOperation key={index} withdraw={withdraw}/>
      ))}
    </div>
  );
}

export default Withdraw;
