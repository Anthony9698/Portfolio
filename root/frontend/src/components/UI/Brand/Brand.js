import React from 'react';
import styles from './brand.module.css';

const brand = props => <div className={styles.Brand}>{props.children}</div>;

export default brand;