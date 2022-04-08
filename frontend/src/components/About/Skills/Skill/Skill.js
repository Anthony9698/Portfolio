import React from 'react';
import styles from './skill.module.css';

const skill = props => {
    let attachedStyles = [styles.Bar];
    if (props.skillsVisible) {
        attachedStyles = [styles.Bar, styles.BarAnimation];
    }
    return (
        <div className={styles.Skill}>
            <div className={styles.Label}>{props.label}</div>
            <div className={styles.Confidence}>
                <div className={attachedStyles.join(' ')} style={{ '--width': `${props.confidence}%` }}></div>
            </div>
            <span>{`${props.confidence}%`}</span>
        </div>
    );
}
export default skill;