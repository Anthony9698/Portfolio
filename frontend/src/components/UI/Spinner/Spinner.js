import React from 'react';
import styles from './spinner.module.css';

const spinner = props => (
    <div className={styles.Spinner}>
        <div class={styles.Rect1}></div>
        <div class={styles.Rect2}></div>
        <div class={styles.Rect3}></div>
        <div class={styles.Rect4}></div>
        <div class={styles.Rect5}></div>
    </div>
);

export default spinner;