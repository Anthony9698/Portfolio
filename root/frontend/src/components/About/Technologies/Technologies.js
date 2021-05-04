import React from 'react';
import styles from './technologies.module.css';
import htmlLogo from '../../../assets/Technologies/html.png';
import cssLogo from '../../../assets/Technologies/css.png';
import scssLogo from '../../../assets/Technologies/scss.png';
import jsLogo from '../../../assets/Technologies/js.png';
import reactLogo from '../../../assets/Technologies/react.png';
import bootstrapLogo from '../../../assets/Technologies/bootstrap.png';
import javaLogo from '../../../assets/Technologies/java.png';
import pythonLogo from '../../../assets/Technologies/python.png';
import cLogo from '../../../assets/Technologies/c.png';
import mysqlLogo from '../../../assets/Technologies/mysql.png';
import postgresLogo from '../../../assets/Technologies/postgres.png';
import androidLogo from '../../../assets/Technologies/android.png';
import firebaseLogo from '../../../assets/Technologies/firebase.png';

const technologies = () => (
    <div className={styles.Technologies}>
        <h3>Frontend</h3>
        <div className={styles.Row}>
            <div className={styles.Tech}>
                <img src={htmlLogo} alt="tech logo" />
                <div className={styles.Title}>HTML</div>
            </div>
            <div className={styles.Tech}>
                <img src={cssLogo} alt="tech logo" />
                <div className={styles.Title}>CSS</div>
            </div>
            <div className={styles.Tech}>
                <img src={scssLogo} alt="tech logo" />
                <div className={styles.Title}>SCSS</div>
            </div>
            <div className={styles.Tech}>
                <img src={jsLogo} alt="tech logo" />
                <div className={styles.Title}>JavaScript</div>
            </div>
            <div className={styles.Tech}>
                <img src={reactLogo} alt="tech logo" />
                <div className={styles.Title}>React</div>
            </div>
            <div className={styles.Tech}>
                <img src={bootstrapLogo} alt="tech logo" />
                <div className={styles.Title}>Bootstrap</div>
            </div>
        </div>
        <h3>Backend</h3>
        <div className={styles.Row}>
            <div className={styles.Tech}>
                <img src={javaLogo} alt="tech logo" />
                <div className={styles.Title}>Java</div>
            </div>
            <div className={styles.Tech}>
                <img src={pythonLogo} alt="tech logo" />
                <div className={styles.Title}>Python</div>
            </div>
            <div className={styles.Tech}>
                <img src={cLogo} alt="tech logo" />
                <div className={styles.Title}>C</div>
            </div>
            <div className={styles.Tech}>
                <img src={mysqlLogo} alt="tech logo" />
                <div className={styles.Title}>MySQL</div>
            </div>
            <div className={styles.Tech}>
                <img src={postgresLogo} alt="tech logo" />
                <div className={styles.Title}>PostgreSQL</div>
            </div>
            <div className={styles.Tech}>
                <img src={androidLogo} alt="tech logo" />
                <div className={styles.Title}>Android</div>
            </div>
        </div>
    </div>
);
export default technologies;