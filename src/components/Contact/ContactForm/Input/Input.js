import React from 'react';
import styles from './input.module.css';

const input = props => (
    <div className={styles.Input}>
        <label className={styles.Label}>{props.label}</label>
        <input className={styles.InputElement} type={styles.type} />
    </div>
);

export default input;