import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './navigationItems.module.css';

const navigationItems = props => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="home" offset={-100}>Home</NavigationItem>
        <NavigationItem link="about" offset={-50}>About</NavigationItem>
        <NavigationItem link="projects" offset={-50}>Projects</NavigationItem>
        <NavigationItem link="contact" offset={-50}>Contact</NavigationItem>        
    </ul>
);

export default navigationItems;