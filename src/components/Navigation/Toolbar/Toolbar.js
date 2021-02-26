import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Name from '../NavigationItems/Name/Name';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <nav>
            <NavigationItems onActiveHome={props.activateName} onInactiveHome={props.deactivateName} />
        </nav>
        <Name isActive={props.activeName} clicked={scroll.scrollToTop} >Anthony Viera</Name>
    </header>
);

export default toolbar;