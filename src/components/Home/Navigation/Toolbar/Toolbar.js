import React from 'react';
import classes from './toolbar.module.css';
import styles from './toolbar.module.css';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <nav className={styles.DesktopOnly}>
        </nav>
    </header>
);

export default toolbar;