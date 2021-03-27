import React from 'react';
import styles from './skills.module.css';
import Skill from './Skill/Skill';

const skills = props => {
    let skills = props.skills.map((skill) => {
        return <Skill 
            key={skill._id}
            label={skill.name} 
            confidence={skill.confidence} 
            skillsVisible={props.isVisible} />;
    });
    return (
        <div className={styles.Skills}>
            {skills}
        </div>
    );
}

export default skills;