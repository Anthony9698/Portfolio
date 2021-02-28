import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styles from './toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../NavigationItems/Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Logo clicked={scroll.scrollToTop} />
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;