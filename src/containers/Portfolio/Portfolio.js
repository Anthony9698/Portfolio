import React, { Component } from 'react';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Aux from '../../hoc/Auxiliary/Auxiliary';

class Portfolio extends Component {
    state = {
        aboutVisible: false,
        currProjectDetailId: false
    }
    aboutVisibilityHandler = isVisible => {
        if (this.state.aboutVisible !== true) {
            this.setState({aboutVisible: isVisible});
        }
    } 
    showProjectDetailHandler = projectId => {
        this.setState({currProjectDetailId: projectId});
    }
    closeProjectDetailHandler = () => {
        this.setState({currProjectDetailId: false});
    }
    render() {
        return (
            <Aux>
                <Home id="home" />
                <About 
                    id="about" 
                    onAbout={this.aboutVisibilityHandler} 
                    aboutVisible={this.state.aboutVisible} />
                <Projects 
                    id="projects"
                    currProjectOpen={this.state.currProjectDetailId}
                    showProjectDetail={this.showProjectDetailHandler}
                    closeProjectDetail={this.closeProjectDetailHandler} />
                <Contact
                    id="contact" />
            </Aux>
        );
    }
}

export default Portfolio;