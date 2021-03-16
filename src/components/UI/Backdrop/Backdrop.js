import React from 'react';
import styles from './backdrop.module.css';

const backdrop = props => {
    let attachedStyles = [styles.Backdrop, styles.Close].join(' ');
    if (props.show) {
        attachedStyles = [styles.Backdrop, styles.Open].join(' ');
    }
    return (
        <div className={attachedStyles} onClick={props.clicked}></div>
    );
}


export default backdrop;