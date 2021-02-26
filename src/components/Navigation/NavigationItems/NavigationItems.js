import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './navigationItems.module.css';

const navigationItems = props => (
    <ul className={styles.NavigationItems}>
        <NavigationItem 
            link="home" 
            onActive={props.onActiveHome} 
            onInactive={props.onInactiveHome}>Home
        </NavigationItem>
        <NavigationItem link="about">About</NavigationItem>
        <NavigationItem link="projects">Projects</NavigationItem>
        <NavigationItem link="contact">Contact</NavigationItem>        
    </ul>
);

export default navigationItems;