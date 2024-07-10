import React from "react";
import styles from "./Socilstyle.module.css";
function SocialIcon() {
  return (
    <div className={styles.cont}>
      <img src="/svgs/proj/Icon1.svg" alt="" />
      <img src="/svgs/proj/Github.svg" alt="" />
      <img src="/svgs/proj/Discord.svg" alt="" />
      <img src="/svgs/proj/X.svg" alt="" />
    </div>
  );
}

export default SocialIcon;
