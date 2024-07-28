import React, { useContext } from 'react';
import styles from "./Project.module.css";
import { FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { sharedState } from '@/app/layout';

const ProjectBand = ({ project }) => {
  const stateRecived = useContext(sharedState);
  const { setCurrentProject } = stateRecived;
  const router = useRouter()
  return (
    <div className={styles.card_body}>
      <div className={styles.card}>
        <div className={styles.project_info}>
          <img src={project.coverURL} alt="Project" />
          <div className={styles.project_details}>
            <p className={styles.project_name}>{project.title}</p>
            <p className={styles.project_description}>{project.description}</p>
          </div>
        </div>
        <div className={styles.actions}>
          <p style={{ fontWeight: "700" }}>Raised </p>
          <p style={{ fontWeight: "700" }}> ${project.currentRaised}</p>
          <button className={styles.btn1} onClick={() => { setCurrentProject(project); router.push("/projects/edit") }}>Edit</button>
          <button className={styles.btn1} onClick={() => { setCurrentProject(project); router.push("/projects/withdrawal")}}>Request Withdrawal</button>
          <FaTrashAlt className={styles.trash_icon} />
        </div>
      </div>
    </div>
  );
}

export default ProjectBand;
