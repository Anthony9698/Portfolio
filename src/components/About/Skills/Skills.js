import React from 'react';
import styles from './skills.module.css';

const skills = props => {
    let attachedStyles = [styles.Bar];
    if (props.isVisible) {
        attachedStyles = [styles.Bar, styles.BarAnimation];
    }

    return (
        <div className={styles.Skills}>
            <h3>Skills</h3>
            <div className={styles.Graph}>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Java</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '80%' }}></div>
                    </div>
                    <span>{'80%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Python</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '85%' }}></div>
                    </div>
                    <span>{'85%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>C</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '70%' }}></div>
                    </div>
                    <span>{'70%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>HTML</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '90%' }}></div>
                    </div>
                    <span>{'90%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>CSS</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '90%' }}></div>
                    </div>
                    <span>{'90%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>SASS</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '60%' }}></div>
                    </div>
                    <span>{'60%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>JavaScript</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '55%' }}></div>
                    </div>
                    <span>{'55%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>ReactJS</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '50%' }}></div>
                    </div>
                    <span>{'50%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>SQL</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '50%' }}></div>
                    </div>
                    <span>{'50%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Git</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '65%' }}></div>
                    </div>
                    <span>{'65%'}</span>
                </div>
            </div>
        </div>
    );
}
export default skills;