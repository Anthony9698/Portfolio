import React from 'react';
import styles from './about.module.css';
import Skills from './Skills/Skills';

const about = props => (
    <div
        className={styles.About}
        id={props.id}>
        <h2 className={styles.Title}>About Me</h2>
        <div className={styles.Description}>
            <p>
                I love programming and learning new technologies
                to solve complicated problems. I take pride in
                developing software solutions that are
                intuitive and efficient.
            </p>
            <Skills />
        </div>
        <button className={styles.DownloadResume}>Download Resume</button>
    </div>
);

export default about;