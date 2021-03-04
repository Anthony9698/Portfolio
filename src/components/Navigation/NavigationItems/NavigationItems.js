import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './navigationItems.module.css';

const navigationItems = props => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="home" offset={-50}>Home</NavigationItem>
        <NavigationItem link="about" offset={-10}>About</NavigationItem>
        <NavigationItem link="projects">Projects</NavigationItem>
        <NavigationItem link="contact">Contact</NavigationItem>        
    </ul>
);

export default navigationItems;