import React from "react";
import styles from "./Table.module.css";
function Table() {
  let rowsArr = [1, 2, 3];
  return (
    <div className={styles.Table_cont}>
      <div className={styles.head}>
        <p></p>
        <p>Users</p>
        <p>Contributions</p>
        <p>Referrals</p>
        <p>BuidlPoints</p>
      </div>
      {rowsArr.map((_, index) => (
        <div className={styles.row} key={index}>
          <div className={styles.content}>
            <img
              src="/svgs/RowIcon.svg"
              alt="icon"
              style={{ margin: "auto" }}
            />
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className={styles.data_Para}>0xXDGET46RG37FD....</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <img
                className={styles.green_point}
                src="/svgs/TablegreenPoint.svg"
                alt="icon"
              />
              <p className={styles.data_Para}>525252</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <img
                className={styles.green_point}
                src="/svgs/TablegreenPoint.svg"
                alt="icon"
              />
              <p className={styles.data_Para}>56,000</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",

                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#E6E6F2",
                  padding: "0px 0 0px 8px",
                  width: "110px",
                  borderRadius: "10px",
                }}
              >
                <img
                  className={styles.green_Star}
                  src="/svgs/Stars.svg"
                  alt="icon"
                />
                <p className={styles.data_Para}>56,000</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
