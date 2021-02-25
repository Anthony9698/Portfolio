import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import styles from './sideDrawer.module.css';

const sideDrawer = props => {
    let attachedClasses = [classes.SideDrawer, classes.Close]

    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;