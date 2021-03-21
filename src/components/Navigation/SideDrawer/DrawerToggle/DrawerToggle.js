import React from 'react';
import styles from './drawerToggle.module.css';

const drawerToggle = props => {
    let topBar, midBar, botBar = null;
    if (props.drawerOpen) {
        topBar = styles.TopBar;
        midBar = styles.MidBar;
        botBar = styles.BotBar;
    }
    return (
        <div className={styles.DrawerToggle} onClick={props.clicked}>
            <div className={[styles.Bars, topBar].join(" ")}></div>
            <div className={[styles.Bars, midBar].join(" ")}></div>
            <div className={[styles.Bars, botBar].join(" ")}></div>
        </div>
    );
}

export default drawerToggle;