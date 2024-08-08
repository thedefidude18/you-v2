import React, { useContext } from 'react';
import styles from "./Project.module.css";
import { FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { sharedState } from '@/app/layout';
import { deleteProject, instantWithdraw } from '@/utils/interact';
import { useAccount, useConfig } from 'wagmi';

const ProjectBand = ({ project, refresh = async () => { } }) => {
  const config = useConfig();
  const { chainId } = useAccount();
  const stateRecived = useContext(sharedState);
  const { setCurrentProject } = stateRecived;
  const router = useRouter()

  const withdraw = async () => {
    await instantWithdraw(config, chainId, project.id);
  }

  const delProject = async () => {
    await deleteProject(config, chainId, project.id);
    await refresh();
  }

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
          {project.target > 0 ? (
            <button className={styles.btn1} onClick={() => { setCurrentProject(project); router.push("/projects/withdrawal") }}>Request Withdrawal</button>
          ) : (
            <button className={styles.btn1} onClick={withdraw}>Withdraw</button>
          )}
          <FaTrashAlt className={styles.trash_icon} onClick={delProject} />
        </div>
      </div>
    </div>
  );
}

export default ProjectBand;
