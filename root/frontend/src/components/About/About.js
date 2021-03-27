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
            <h2 className={styles.Title}>{props.title}</h2>
        </VizSensor>
        <div className={styles.MainContent}>
            <p className={styles.Description}>{props.description}</p>
            <Skills isVisible={props.aboutVisible} skills={props.skills} />
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