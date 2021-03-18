import React from 'react';
import profilePic from '../../assets/Home/Profile/ginger.png';
import gitHubLink from '../../assets/Home/Social/github.png';
import linkedInLink from '../../assets/Home/Social/linkedIn.png';
import styles from './home.module.css';

const home = props => (
    <div className={styles.Home} id={props.id}>
        <div className={styles.Content}>
            <img className={styles.ProfilePic} src={profilePic} alt="profile" />
            <h1 className={styles.Greeting}>Hello, I'm Anthony.</h1>
            <p className={styles.Summary}>
                I'm a Computer Science Graduate with a
                concentration in Software Engineering.
            </p>
            <div className={styles.SocialLinks}>
                <a href="https://github.com/Anthony9698">
                    <img src={gitHubLink} alt="github link" />
                </a>
                <a href="https://www.linkedin.com/in/anthony-viera-4b58031aa/">
                    <img src={linkedInLink} alt="linkedIn link" />
                </a>
            </div>
        </div>
    </div>
);

export default home;