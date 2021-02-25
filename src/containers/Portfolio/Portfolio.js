import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <Home />
            </div>
        );
    }
}

export default Portfolio;