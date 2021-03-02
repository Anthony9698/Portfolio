import React from 'react';
import styles from './skills.module.css';

const skills = props => (
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
);

export default skills;