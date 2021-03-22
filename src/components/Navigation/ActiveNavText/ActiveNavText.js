import React from 'react';
import styles from './activeNavText.module.css';

const activeNavText = props => {
    let activeNavLink = <div className={styles.ActiveNavText}>{props.currNavLink}</div>
    if (props.currNavLink === 'Home' || props.currNavLink === null) {
        activeNavLink = <div className={styles.ActiveNavText}>Anthony Viera</div>
    }
    return activeNavLink;
}

export default activeNavText;