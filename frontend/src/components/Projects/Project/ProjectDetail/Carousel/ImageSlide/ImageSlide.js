import React from 'react';
import styles from './imageSlide.module.css';
import projectPlaceholder from '../../../../../../assets/Projects/Placeholders/empty.jpg';

const imageSlide = props => {
    let imageUrl = projectPlaceholder;
    if (props.url) {
        imageUrl = props.url;
    }
    return <img className={styles.Slide} src={imageUrl} alt="project slide" />
}

export default imageSlide;