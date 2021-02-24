import React from 'react';
import profilePic from '../../assets/Home/Profile/me.png';
import styles from './home.module.css';

const home = props => {
    return (
        <div className={styles.Home}>
            <img src={profilePic} alt="profilePic" />
            <h1 className={styles.Greeting}>Hello, I'm Anthony.</h1>
            <p className={styles.Summary}>
                I'm a Computer Science Graduate with a
                concentraction in Software Engineering.
            </p>
            <div>
            </div>
        </div>
    );
}

export default home;