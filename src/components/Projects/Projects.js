import React from 'react';
import styles from './projects.module.css';

const projects = props => (
    <div className={styles.Projects} id={props.id}>
        <div className={styles.Title}>Projects</div>
        <div className={styles.Content}>
            <div className={styles.Description}>
                <p>I try my best to stay busy whenever I can. Here are
                some of the projects that I have worked on in the past.
                </p>
            </div>
            <div className={styles.ProjectsDisplay}>
                <div className={styles.Project}>1</div>
                <div className={styles.Project}>1</div>
                <div className={styles.Project}>1</div>
                <div className={styles.Project}>1</div>
                <div className={styles.Project}>1</div>
                <div className={styles.Project}>1</div>
            </div>
        </div>
    </div>
);

export default projects;