import React from 'react';
import profilePic from '../../assets/Home/Profile/ginger.png';
import gitHubLink from '../../assets/Home/Social/github.png';
import linkedInLink from '../../assets/Home/Social/linkedIn.png';
import styles from './home.module.css';

const home = props => (
    <div className={styles.Home} id={props.id}>
        <div className={styles.MainContent}>
            <img className={styles.ProfilePic} src={profilePic} alt="profile" />
            <h1 className={styles.Greeting}>Hello, I'm Anthony.</h1>
            <p className={styles.Summary}>
                I'm a Computer Science Graduate with a
                concentration in Software Engineering.
            </p>
            <div className={styles.Start}>
                <button>Start</button>
            </div>
        </div>
    </div>
);

export default home;