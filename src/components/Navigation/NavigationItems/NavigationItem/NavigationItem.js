import React from 'react';
import { Link } from 'react-scroll';
import styles from './navigationItem.module.css';

const navigationItem = props => (
    <li className={styles.NavigationItem}>
        <Link
            activeClass={styles.active}
            to={props.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={props.onActive}
            onSetInactive={props.onInactive}>
            {props.children}
        </Link>
    </li>
);

export default navigationItem;