import React from 'react';
import styles from './toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import ActiveNavText from '../ActiveNavText/ActiveNavText';
import Brand from '../../UI/Brand/Brand';

const toolbar = props => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} drawerOpen={props.sideDrawerOpen} />
        <Brand>Anthony Viera</Brand>
        <ActiveNavText currNavLink={props.currNavLink} />
        <nav className={styles.DesktopOnly}>
            <NavigationItems onActiveLink={props.onActiveNavLink} />
        </nav>
    </header>
);

export default toolbar;