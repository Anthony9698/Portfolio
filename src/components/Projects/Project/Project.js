import React from 'react';
import styles from './project.module.css';
import projectPlaceholder from '../../../assets/Projects/Placeholders/empty.jpg';


const project = props => {
    return (
        <div className={styles.Project}>
            {/* <div className={styles.Overlay}></div> */}
            <div className={styles.Overlay}>
                <img src={projectPlaceholder} alt="project cover" />
                <div><button>Learn More</button></div>
            </div>
            {/* <img className src={projectPlaceholder} alt="project cover" /> */}
            <div><a className={styles.ProjectTitle} href="#">AmiTask</a></div>
        </div>
    );
}

export default project;