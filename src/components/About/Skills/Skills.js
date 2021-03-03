import React from 'react';
import styles from './skills.module.css';

const skills = props => {
    let percentage = '90%';
    return (
        <div className={styles.Skills}>
            <h3>Skills</h3>
            <div className={styles.Graph}>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Java</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={styles.Bar} style={{ '--width': percentage }}></div>
                    </div>
                    <span>{percentage}</span>
                </div>
            </div>
        </div>
    );
}
export default skills;