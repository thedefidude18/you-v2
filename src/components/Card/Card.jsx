import React from "react";
import Button from "../Button/Button";
import styles from "./card.module.css";
import Link from "next/link";
function Card({ image, title, subTitle, description, bars ,id }) {
  return (
    <div className={styles.card__cont}>
      <div className={styles.row__one}>
        <div className={styles.ava__cont}>
          <img src={image} alt="ava" />
          <h2>{title}</h2>
        </div>
        <div className={styles.right__cont}>
          <p>12 March 2050</p>
          <Link href={`/rewards/${id}`}>
            <span >Grant</span> $400
            <span>(20%)</span>
          </Link>
        </div>
      </div>
      <div className={styles.row__two}>
        <h4>{subTitle}</h4>
        <p>{description}</p>
      </div>
      {!bars && (
        <div className={styles.row__three}>
          <Button text="For" />
          <Button text="Against" />
        </div>
      )}
      {bars && (
        <div className={styles.bar__Cont}>
          <div className={styles.divide}>
            <h6>For</h6>
            <div className={styles.barShadow}></div>
            <h6>50%</h6>
          </div>
          <div className={styles.divide}>
            <h6>Against</h6>
            <div className={styles.barShadow}></div>
            <h6>45%</h6>
          </div>
          <div className={styles.last_Row}>
            <div className={styles.statistics}>
              <p>Contributors</p>
              <h6>200</h6>
            </div>
            <div className={styles.statistics}>
              <p>Voters</p>
              <h6>200</h6>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
