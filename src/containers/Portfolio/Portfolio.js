import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Portfolio extends Component {
    render() {
        return (
            <Aux>
                <Home id="home" />
                <About id="about" />
            </Aux>
        );
    }
}

export default Portfolio;