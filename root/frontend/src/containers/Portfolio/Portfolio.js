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
        currProjectDetailId: false,
        sections: {
            home: {
                title: "",
                description: ""
            },
            about: {
                title: "",
                description: "",
            },
            projects: {
                title: "",
                description: ""
            },
            contact: {
                title: "",
                description: ""
            },
        },
        skills: [],
        projects: [],
        profilePicUrl: ""
    }

    componentDidMount = () => {
        this.getAllSectionInfo();
        this.getAllSkills();
        this.getAllProjects();
        this.getProfilePic();
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

    getAllSectionInfo = () => {
        const sections = JSON.parse(JSON.stringify(this.state.sections));
        Object.keys(sections).forEach((section) => {
            let sectionRoute = 'https://findanthonyviera.com/api/sections?name=' + section;
            axios.get(sectionRoute)
                .then(res => {
                    sections[section].title = res.data.title;
                    sections[section].description = res.data.description;
                    this.setState({ sections: JSON.parse(JSON.stringify(sections)) });
                });
        });
    }

    getAllSkills = () => {
        axios.get('https://findanthonyviera.com/api/skills')
            .then(res => {
                this.setState({ skills: res.data });
            });
    }

    getAllProjects = () => {
        axios.get('https://findanthonyviera.com/api/projects')
            .then(res => {
                this.setState({ projects: res.data });
            });
    }

    getProfilePic = () => {
        axios.get('https://findanthonyviera.com/api/profiles?current=true')
            .then(res => {
                this.setState({ profilePicUrl: res.data[0].url });
            });
    }

    render() {
        return (
            <Aux>
                <div className={styles.Portfolio}>
                    <Home
                        id="Home"
                        title={this.state.sections.home.title}
                        description={this.state.sections.home.description}
                        profilePicSrc={this.state.profilePicUrl} />
                    <About
                        id="About"
                        onAbout={this.aboutVisibilityHandler}
                        aboutVisible={this.state.aboutVisible}
                        title={this.state.sections.about.title}
                        description={this.state.sections.about.description}
                        skills={[...this.state.skills]} />
                    <Projects
                        id="Projects"
                        currProjectOpen={this.state.currProjectDetailId}
                        showProjectDetail={this.showProjectDetailHandler}
                        closeProjectDetail={this.closeProjectDetailHandler}
                        title={this.state.sections.projects.title}
                        description={this.state.sections.projects.description}
                        projects={[...this.state.projects]} />
                    <Contact
                        id="Contact"
                        title={this.state.sections.contact.title}
                        description={this.state.sections.contact.description} />
                    <Footer>Anthony Viera © 2021</Footer>
                </div>
            </Aux>
        );
    }
}

export default Portfolio;
