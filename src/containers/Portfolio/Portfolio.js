import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Portfolio extends Component {
    state = {
        aboutVisible: false
    }
    aboutVisibilityHandler = isVisible => {
        if (this.state.aboutVisible !== true) {
            this.setState({aboutVisible: isVisible});  
        }
    } 
    render() {
        return (
            <Aux>
                <Home id="home" />
                <About id="about" 
                    onAbout={this.aboutVisibilityHandler} 
                    aboutVisible={this.state.aboutVisible} />
            </Aux>
        );
    }
}

export default Portfolio;