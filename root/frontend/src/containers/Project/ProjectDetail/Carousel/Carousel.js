import React, { Component } from 'react';
import styles from './carousel.module.css';
import ImageSlide from '../../../../components/Projects/Project/ProjectDetail/Carousel/ImageSlide/ImageSlide';
import Arrow from '../../../../components/UI/Projects/ProjectDetail/Arrow/Arrow';
import Close from '../../../../components/UI/Projects/ProjectDetail/Close/Close';

class Carousel extends Component {
    render() {
        return (
            <div className={styles.Carousel}>
                <ImageSlide url={this.props.imageUrl} />
                <Arrow direction="back" />
                <Arrow direction="next" />
                <Close closeProjectDetail={this.props.closeProjectDetail} />
            </div>
        );
    }
}

export default Carousel;