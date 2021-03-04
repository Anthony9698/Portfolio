import React from 'react';
import styles from './skills.module.css';

const skills = props => {
    let percentage = '90%';
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
                        <div className={attachedStyles.join(' ')} style={{ '--width': percentage }}></div>
                    </div>
                    <span>{percentage}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Python</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '65%' }}></div>
                    </div>
                    <span>{'65%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Java</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': percentage }}></div>
                    </div>
                    <span>{percentage}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Python</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '65%' }}></div>
                    </div>
                    <span>{'65%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Java</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': percentage }}></div>
                    </div>
                    <span>{percentage}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Python</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '65%' }}></div>
                    </div>
                    <span>{'65%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Python</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '65%' }}></div>
                    </div>
                    <span>{'65%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Python</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '65%' }}></div>
                    </div>
                    <span>{'65%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Python</div>
                    <div className={styles.GraphRowProgress}>
                        <div className={attachedStyles.join(' ')} style={{ '--width': '65%' }}></div>
                    </div>
                    <span>{'65%'}</span>
                </div>
                <div className={styles.GraphRow}>
                    <div className={styles.GraphRowLabel}>Python</div>
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