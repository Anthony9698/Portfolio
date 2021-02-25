import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './navigationItems.module.css';

const navigationItems = props => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/">About</NavigationItem>
        <NavigationItem link="/">Projects</NavigationItem>
        <NavigationItem link="/">Contact</NavigationItem>
    </ul>
);

export default navigationItems;