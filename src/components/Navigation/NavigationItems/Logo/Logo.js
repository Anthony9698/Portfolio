import React from 'react';
import styles from './logo.module.css';

const logo = props => {
    let logo = (
        <div
            className={styles.Logo}
            onClick={props.clicked}>AV</div>);
    if (props.isActive) {
        logo = (
            <div
                className={[styles.Logo, styles.Active].join(' ')}
                onClick={props.clicked}>AV</div>);
    }
    return logo;
}

export default logo;