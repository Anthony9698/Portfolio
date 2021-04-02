import React, { Component } from 'react';
import styles from './carousel.module.css';
import ImageSlide from '../../../../components/Projects/Project/ProjectDetail/Carousel/ImageSlide/ImageSlide';
import Arrow from '../../../../components/Projects/Project/ProjectDetail/Carousel/Arrow/Arrow';
import Exit from '../../../../components/Projects/Project/ProjectDetail/Carousel/Exit/Exit';

class Carousel extends Component {
    state = {
        currSlideIndex: 0
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currSlideIndex !== 0) {
            this.setState({ currSlideIndex: 0 });
        }
    }

    goToSlide = slideNum => {
        let imageAlbum = this.props.imageAlbum;
        let currSlideIndex = this.state.currSlideIndex;
        if (imageAlbum[0]) {
            if (currSlideIndex+slideNum < 0) {
                currSlideIndex = imageAlbum.length-1;
            }
            else if (currSlideIndex+slideNum > imageAlbum.length-1) {
                currSlideIndex = 0;
            }
            else {
                currSlideIndex += slideNum;
            }
            this.setState({ currSlideIndex: currSlideIndex });
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
