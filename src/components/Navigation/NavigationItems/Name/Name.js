import React from 'react';
import styles from './name.module.css';

const name = props => {
    let name = (
        <div
            className={styles.Name}
            onClick={props.clicked}>{props.children}</div>);
    if (props.isActive) {
        name = (
            <div
                className={[styles.Name, styles.Active].join(' ')}
                onClick={props.clicked}>{props.children}</div>);
    }
    return name;
}

export default name;