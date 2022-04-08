import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './navigationItems.module.css';

const navigationItems = props => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="Home" onSetActive={props.onActiveLink}>Home</NavigationItem>
        <NavigationItem link="About" onSetActive={props.onActiveLink}>About</NavigationItem>
        <NavigationItem link="Projects" onSetActive={props.onActiveLink}>Projects</NavigationItem>
        <NavigationItem link="Contact" onSetActive={props.onActiveLink}>Contact</NavigationItem>        
    </ul>
);

export default navigationItems;