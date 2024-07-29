import React from "react";
import Button from "../Button/Button";
import styles from "./card.module.css";
import Link from "next/link";
function Card({ request, isContributer, confirm = () => { } }) {
  return (
    <div className={styles.card__cont}>
      <div className={styles.row__one}>
        <div className={styles.ava__cont}>
          <img src={request.project.coverURL} alt="ava" />
          <h2>{request.project.title}</h2>
        </div>
        <div className={styles.right__cont}>
          <p>{new Date(request.time * 1000).toLocaleDateString()}</p>
          <Link href={`/rewards/${request.project.id}`}>
            <span >Grant</span> ${request.reqAmount}
            <span>({Math.ceil((request.numOfAgainst + request.numOfFor) / request.project.noOfContributors * 100)}%)</span>
          </Link>
        </div>
      </div>
      <div className={styles.row__two}>
        <h4>Milestone Description:</h4>
        <p>{request.requestDesc}</p>
      </div>

      <div className={styles.bar__Cont}>
        <div className={styles.divide}>
          <h6>For</h6>
          <div className={styles.barShadow}></div>
          <h6>{Math.floor(request.numOfFor / request.project.noOfContributors * 100)} %</h6>
        </div>
        <div className={styles.divide}>
          <h6>Against</h6>
          <div className={styles.barShadow}></div>
          <h6>{Math.ceil(request.numOfAgainst / request.project.noOfContributors * 100)}%</h6>
        </div>
        <div className={styles.last_Row}>
          <div className={styles.statistics}>
            <p>Contributors</p>
            <h6>{request.project.noOfContributors}</h6>
          </div>
          <div className={styles.statistics}>
            <p>Voters</p>
            <h6>{+request.numOfFor + +request.numOfAgainst}</h6>
          </div>
        </div>
        {
          isContributer && !request.isVote && !request.isSucceed && (
            <div className={styles.row__three}>
              <button className={styles.btn} onClick={() => confirm(request.project.id, request.reqId, 1)}>For</button>
              <button className={styles.btn} onClick={() => confirm(request.project.id, request.reqId, 2)}>Against</button>
            </div>
          )
        }
        {
          !isContributer && !request.isSucceed && request.numOfFor >= request.project.noOfContributors / 5 && (
            <div className={styles.row__three}>
              <button className={styles.btn} onClick={() => confirm(request.project.id, request.reqId)}>Withdraw</button>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Card;
