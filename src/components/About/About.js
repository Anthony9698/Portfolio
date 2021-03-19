import React from 'react';
import styles from './about.module.css';
import Skills from './Skills/Skills';
import VizSensor from 'react-visibility-sensor';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

const about = props => (
    <div
        className={styles.About}
        id={props.id}>
        <VizSensor onChange={props.onAbout}>
            <h2 className={styles.Title}>About Me</h2>
        </VizSensor>
        <div className={styles.MainContent}>
            <p className={styles.Description}>
                I love programming and learning new technologies
                to solve complicated problems. I take pride in
                developing elegant software solutions that are
                intuitive and efficient.
            </p>
            <Skills isVisible={props.aboutVisible} />
            <div className={styles.Github}>
                <div className={styles.Label}>GitHub</div>
                <GitHubCalendar
                    username="anthony9698"
                    blockMargin={2}
                    blockSize={15}
                    fontSize={18}>
                    <ReactTooltip delayShow={50} html />
                </GitHubCalendar>
            </div>
        </div>
    </div>
);

export default about;