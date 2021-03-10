import React from 'react';
import styles from './projectDetail.module.css';
import projectPlaceholder from '../../../../assets/Projects/Placeholders/empty.jpg';

const projectDetail = () => {
    return (
        <div className={styles.Detail}>
            <div className={styles.Carousel}>
                <img className={styles.Slide} src={projectPlaceholder} alt="project slide" />
            </div>
        </div>
    );
}

export default projectDetail;