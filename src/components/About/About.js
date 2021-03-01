import React from 'react';
import styles from './about.module.css';

const about = props => (
    <div
        className={styles.About}
        id={props.id}>
        <h2 className={styles.Title}>About Me</h2>
        <div className={styles.Description}>
            <p>
                I love programming and learning new technologies
                to solve complicated problems. I take pride in
                developing elegant software solutions that are
                easy to understand and efficient.
            </p>
            <div className={styles.Skills}>
                <h3>Skills</h3>
            </div>
        </div>
        <button className={styles.DownloadResume}>Download Resume</button>
    </div>
);

export default about;