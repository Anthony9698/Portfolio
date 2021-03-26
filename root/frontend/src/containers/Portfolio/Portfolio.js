import React, { Component } from 'react';
import styles from './portfolio.module.css';
import Home from '../../components/Home/Home';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

class Portfolio extends Component {
    state = {
        aboutVisible: false,
        currProjectDetailId: false
    }

    componentDidMount = () => {
        axios.get("/sections?name=home").then(response => {
            console.log(response);
        })
    }

    aboutVisibilityHandler = isVisible => {
        if (this.state.aboutVisible !== true) {
            this.setState({ aboutVisible: isVisible });
        }
    }

    showProjectDetailHandler = projectId => {
        this.setState({ currProjectDetailId: projectId });
    }

    closeProjectDetailHandler = () => {
        this.setState({ currProjectDetailId: false });
    }

    render() {
        return (
            <Aux>
                <div className={styles.Portfolio}>
                    <Home id="Home" />
                    <About
                        id="About"
                        onAbout={this.aboutVisibilityHandler}
                        aboutVisible={this.state.aboutVisible} />
                    <Projects
                        id="Projects"
                        currProjectOpen={this.state.currProjectDetailId}
                        showProjectDetail={this.showProjectDetailHandler}
                        closeProjectDetail={this.closeProjectDetailHandler} />
                    <Contact
                        id="Contact" />
                    <Footer>Anthony Viera © 2021</Footer>
                </div>
            </Aux>
        );
    }
}

export default Portfolio;