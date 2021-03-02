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
                <div className={styles.Graph}>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>Java</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>C</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>JavaScript</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>React</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>HTML</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>BASH</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>Splunk</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>Java</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>Java</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                    <div className={styles.GraphRow}>
                        <div className={styles.GraphRowLabel}>Java</div>
                        <div className={styles.GraphRowProgress}>.</div>
                        <span>90%</span>
                    </div>
                </div>
            </div>
        </div>
        <button className={styles.DownloadResume}>Download Resume</button>
    </div>
);

export default about;