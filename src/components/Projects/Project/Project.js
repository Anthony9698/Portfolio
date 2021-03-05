import React from 'react';
import styles from './project.module.css';
import projectPlaceholder from '../../../assets/Projects/Placeholders/empty.jpg';


const project = props => {
    return (
        <div className={styles.Project}>
            <div>
                <img className src={projectPlaceholder} alt="project cover" />
            </div>
            <div className={styles.ProjectTitle}>AmiTask</div>
        </div>
    );
}

export default project;