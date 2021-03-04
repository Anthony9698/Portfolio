import React from 'react';
import styles from './about.module.css';
import Skills from './Skills/Skills';
import VizSensor from 'react-visibility-sensor';

const about = props => (
    <div
        className={styles.About}
        id={props.id}>
        <VizSensor onChange={props.onAbout}>
            <h2 className={styles.Title}>About Me</h2>
        </VizSensor>
        <div className={styles.Description}>
            <p>
                I love programming and learning new technologies
                to solve complicated problems. I take pride in
                developing software solutions that are
                intuitive and efficient.
            </p>
            <Skills isVisible={props.aboutVisible} />
        </div>
        <button className={styles.DownloadResume}>Download Resume</button>
    </div>
);

export default about;