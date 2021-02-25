import React from 'react';
import styles from './navigationItem.module.css';

const navigationItem = props => (
    <li className={styles.NavigationItem}>
        <a 
            className={styles.NavigationItem}
            href={props.link}
            activeClassName={styles.active}>
            {props.children}
        </a>
    </li>
);

export default navigationItem;