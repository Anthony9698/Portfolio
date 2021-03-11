import React from 'react';
import styles from './project.module.css';
import projectPlaceholder from '../../../assets/Projects/Placeholders/empty.jpg';
import ProjectDetail from './ProjectDetail/ProjectDetail';

const project = props => {
    let projectDetail;
    if (props.isOpen) {
        projectDetail = <ProjectDetail projectId={props.id} />;
    }
    return (
        <div className={styles.Project}>
            <div className={styles.Overlay}>
                <img className={styles.CoverImg} src={projectPlaceholder} alt="project cover" />
                <div><button onClick={props.show}>Learn More</button></div>
            </div>
            <div><a className={styles.ProjectTitle} href="#">AmiTask</a></div>
            {projectDetail}
        </div>
    );
}

export default project;