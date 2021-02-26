import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <Home id="home" />
                <About id="about" />
            </div>
        );
    }
}

export default Portfolio;