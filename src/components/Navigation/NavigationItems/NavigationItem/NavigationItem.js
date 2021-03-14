import React from 'react';
import { Link, scroller } from 'react-scroll';
import styles from './navigationItem.module.css';

const navigationItem = props => {
    const activeClass = styles.active;
    const link = props.link;
    const spy = true;
    const smooth = true;
    const offset = -100;
    const duration = 500;
    return (
        <li className={styles.NavigationItem} onClick={() => scroller.scrollTo(link, {
            activeClass: activeClass,
            duration: duration,
            smooth: smooth,
            offset: offset,
            spy: spy
        })}>
            <Link
                activeClass={activeClass}
                to={link}
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}>
                {props.children}
            </Link>
        </li>
    );
}

export default navigationItem;