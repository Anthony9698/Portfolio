import React, { Component } from 'react';
import styles from './carousel.module.css';
import ImageSlide from '../../../../components/Projects/Project/ProjectDetail/Carousel/ImageSlide/ImageSlide';
import Arrow from '../../../../components/Projects/Project/ProjectDetail/Carousel/Arrow/Arrow';
import Exit from '../../../../components/Projects/Project/ProjectDetail/Carousel/Exit/Exit';

class Carousel extends Component {
    state = {
        currSlideIndex: 0
    }

    goToSlide = slideNum => {
        let imageAlbum = this.props.imageAlbum;
        let slideIndex = this.state.currSlideIndex;
        if (imageAlbum[0]) {
            if (slideIndex+slideNum < 0) {
                slideIndex = imageAlbum.length-1;
            }
            else if (slideIndex+slideNum > imageAlbum.length-1) {
                slideIndex = 0;
            }
            else {
                slideIndex = slideIndex + slideNum;
            }
            this.setState({ currSlideIndex: slideIndex });
        }
    }

    render() {
        return (
            <div className={styles.Carousel}>
                <ImageSlide url={this.props.imageAlbum ? this.props.imageAlbum[this.state.currSlideIndex] : null} />
                <Arrow direction="back" clicked={() => this.goToSlide(-1)} />
                <Arrow direction="next" clicked={() => this.goToSlide(1)} />
                <Exit clicked={this.props.closeProjectDetail} />
            </div>
        );
    }
}

export default Carousel;
