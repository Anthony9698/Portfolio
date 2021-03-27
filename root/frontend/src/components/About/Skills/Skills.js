import React from 'react';
import styles from './skills.module.css';
import Skill from './Skill/Skill';

const skills = props => {
    return (
        <div className={styles.Skills}>
            <Skill confidence={80} skillsVisible={props.isVisible}>Java</Skill>
        </div>
    );
}
export default skills;