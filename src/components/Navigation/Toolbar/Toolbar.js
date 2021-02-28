import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../NavigationItems/Logo/Logo';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <nav>
            <NavigationItems onActiveHome={props.activateName} onInactiveHome={props.deactivateName} />
        </nav>
        <Logo isActive={props.activeName} clicked={scroll.scrollToTop} />
    </header>
);

export default toolbar;