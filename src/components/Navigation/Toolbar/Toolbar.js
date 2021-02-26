import React from 'react';
import styles from './toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Name from '../NavigationItems/Name/Name';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <nav>
            <NavigationItems highlightHome={props.activeHome} />
        </nav>
        <Name isActive={props.isActive}>Anthony Viera</Name>
    </header>
);

export default toolbar;