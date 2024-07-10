import React from "react";
import styles from "./Stepsstyle.module.css";
function Steps({ step }) {
  console.log(step); ////[object Object]1
  const steps = [
    { name: "Build Details", completed: true },
    { name: "Target & Data", completed: false },
    { name: "Social Links", completed: false },
  ];
  return (
    <div className={styles.steps_container}>
      {steps.map((item, index) => (
        <div key={index} className={styles.step_cont}>
          {/* <div className={styles[`step${index + 1}`]}> */}
          <div
            className={
              index <= step
                ? styles.step_Num + " " + styles.done
                : styles.step_Num
            }
          >
            {item.completed ? (
              <img src="/svgs/qf/Right.svg" alt="completed" />
            ) : (
              <p>{index + 1}</p>
            )}
          </div>
          <div className={styles.par__bar}>
            <p className={styles.step_Name}>{item.name}</p>
            {index < 2 && (
              <div className={styles.line}>
                <div
                  className={index === 0 || index < step ? styles.cover : ""}
                ></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Steps;
