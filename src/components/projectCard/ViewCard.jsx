import React from "react";
import Button from "../Button/Button";
import styles from "./ViewCardStyle.module.css";
function ViewCard({ description1, description2, title, id }) {
  const backgroundStyle1 = description1
    ? `linear-gradient(99.87deg, #0F1222 26.62%, rgba(0, 0, 0, 0) 93.5%), 
     linear-gradient(0deg, rgba(42, 53, 84, 0.54), rgba(42, 53, 84, 0.54))`
    : "";
  const backgroundStyle2 = description2
    ? `background: linear-gradient(99.87deg, #0F1222 26.62%, rgba(0, 0, 0, 0) 93.5%),
linear-gradient(0deg, rgba(1, 54, 71, 0.54), rgba(1, 54, 71, 0.54));
`
    : "";
  return (
    <div
      className={styles.view_card_cont}
      style={{ background: backgroundStyle1 || backgroundStyle2 }}
    >
      <div>
        <h3>{title}</h3>
        {id == 2 && (
          <p className={styles.description}>
            You have received <span>USDT 2</span> reward for funding 10
            projects.
          </p>
        )}
        {id == 3 && (
          <>
            <p className={styles.description}>
              You have referred<span> 200</span> contributors.
            </p>
            <p className={styles.description}>
              {" "}
              You get
              <span> +10% </span>of the referred user.
            </p>
          </>
        )}
      </div>
      <img src="/svgs/Jewellery.svg" alt="" className={styles.jullery} />
      {id == 1 && (
        <div className={styles.last_Row} style={{ justifyContent: "flex-end" }}>
          <Button
            text="Claim Now"
            color="var(--fivth-color)"
            type="link"
            path="#"
            // path="rewards/claim"
          />
        </div>
      )}
      {/****Second Card if id=2 return last Row with his Style***/}
      {id == 2 && (
        <div className={styles.last_Row}>
          <div>
            <div
              style={{
                color: "#F3F6FB",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <img
                src="/svgs/proj/Brand1.svg"
                style={{ width: "20px", height: "20px" }}
              />
              <p style={{ fontSize: "10px" }}>
                <span style={{ fontSize: "24px" }}>$500</span>USDT
              </p>
            </div>
          </div>
          <div className={styles.btns__cont}>
            <>
              <div></div>
              <Button
                text="Claim Now"
                color="var(--fivth-color)"
                type="link"
                path="rewards/claim"
              />
            </>
          </div>
        </div>
      )}
      {/****Last Card if id=3 return last Row with his Style***/}
      {id == 3 && (
        <div
          className={styles.last_Row}
          style={{ justifyContent: "flex-end", gap: "16px" }}
        >
          <Button
            text="Tweet Link"
            color="var(--fivth-color)"
            type="link"
            path="#"
          />
          <Button
            text="Copy Link"
            color="var(--fivth-color)"
            type="link"
            path="#"
          />
        </div>
      )}
    </div>
  );
}

export default ViewCard;
