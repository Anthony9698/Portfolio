import React from 'react';
import styles from './project.module.css';
import projectPlaceholder from '../../../assets/Projects/Placeholders/empty.jpg';
import ProjectDetail from './ProjectDetail/ProjectDetail';

const project = props => {
    return (
        <div className={styles.Project}>
            <div className={styles.Overlay}>
                <img className={styles.CoverImg} src={projectPlaceholder} alt="project cover" />
                <div className={styles.LearnMore}><button onClick={props.show}>Learn More</button></div>
                <div className={styles.ProjectTitle}>AmiTask</div>
            </div>
            <ProjectDetail projectId={props.id} close={props.closeProject} open={props.isOpen} />
        </div>
    );
}

export default project;