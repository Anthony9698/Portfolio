import React from 'react';
import styles from './toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;