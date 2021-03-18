import React from 'react';
import styles from './footer.module.css';

const footer = props => <footer className={styles.Footer}>{props.children}</footer>

export default footer;