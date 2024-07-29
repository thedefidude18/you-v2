import React from "react";
import styles from "./Voting.module.css";
import VotingElement from "./VotingElement";
function Voting({numFor, numAgainst}) {
  const votingStatics = [
    {
      icon: "/svgs/Vote1.svg",
      title: "Num of votes",
      votNum: numFor + numAgainst,
    },
    {
      icon: "/svgs/Vote2.svg",
      title: "Voted For",
      votNum: numFor,
    },
    {
      icon: "/svgs/Vote3.svg",
      title: "Voted Against",
      votNum: numAgainst,
    },
  ];
  return (
    <div className={styles.voting_Card}>
      <h3>Your voting stat</h3>
      {votingStatics.map((item, index) => (
        <VotingElement
          key={index}
          image={item.icon}
          title={item.title}
          votNum={item.votNum}
        />
      ))}
    </div>
  );
}

export default Voting;
