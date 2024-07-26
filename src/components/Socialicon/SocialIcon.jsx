import React from "react";
import styles from "./Socilstyle.module.css";
function SocialIcon({project}) {
  return (
    <div className={styles.cont}>
      <a href={project.websiteURL} target="blank"><img src="/svgs/proj/Icon1.svg" alt="" /></a>
      <a href={project.githubURL} target="blank"><img src="/svgs/proj/Github.svg" alt="" /></a>
      <a href={project.socialURL} target="blank"><img src="/svgs/proj/X.svg" alt="" /></a>
    </div>
  );
}

export default SocialIcon;
