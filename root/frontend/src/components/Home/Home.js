import React from 'react';
import profilePic from '../../assets/Home/Profile/ginger.png';
import styles from './home.module.css';
import { scroller as scroll } from 'react-scroll';

const home = props => {
    return (
        <div className={styles.Home} id={props.id}>
            <div className={styles.MainContent}>
                <img className={styles.ProfilePic} src={props.profilePicSrc} alt="profile" />
                <h1 className={styles.Greeting}>{props.title}</h1>
                <p className={styles.Summary}>{props.description}</p>
                <div className={styles.Start}>
                    <button onClick={() => scroll.scrollTo('About', {
                        duration: 500,
                        smooth: true,
                        offset: -50
                    })}>Learn More
                    <svg className={styles.Arrow} id="right-arrow_3_" data-name="right-arrow (3)" xmlns="http://www.w3.org/2000/svg" width="25.52" height="21.23" viewBox="0 0 25.52 21.23">
                            <g id="Group_136" data-name="Group 136" transform="translate(0 0)">
                                <path id="Path_44" data-name="Path 44" d="M25.112,50.97,15.9,41.753a1.4,1.4,0,0,0-1.975,0l-.837.837a1.386,1.386,0,0,0-.408.988,1.414,1.414,0,0,0,.408,1l5.376,5.388H1.379A1.363,1.363,0,0,0,0,51.339v1.183a1.415,1.415,0,0,0,1.379,1.434H18.521l-5.437,5.418a1.383,1.383,0,0,0,0,1.961l.837.834a1.4,1.4,0,0,0,1.975,0l9.216-9.216a1.409,1.409,0,0,0,0-1.982Z" transform="translate(0 -41.346)" fill="#1E1E24" />
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default home;