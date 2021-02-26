import React from 'react';
import styles from './name.module.css';

const name = props => (
    <div className={styles.Name} onClick={props.clicked}>{props.children}</div>
);

export default name;