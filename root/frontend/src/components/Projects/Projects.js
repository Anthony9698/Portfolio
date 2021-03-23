import React from 'react';
import styles from './projects.module.css';
import Project from './Project/Project';

const projects = props => {
    const currProjectDetail = projectId => {
        if (projectId === props.currProjectOpen) {
            return true;
        }
        return false;
    }

    return (
        <div className={styles.Projects} id={props.id}>
            <div className={styles.Title}>Projects</div>
            <div className={styles.Content}>
                <div className={styles.Description}>
                    <p>I try my best to stay busy whenever I can. Here are
                    some of the projects that I have worked on in the past.
                    </p>
                </div>
                <div className={styles.ProjectsDisplay}>
                    <Project
                        id="1"
                        show={() => props.showProjectDetail('1')}
                        isOpen={currProjectDetail('1')}
                        closeProject={props.closeProjectDetail} />
                    <Project
                        id="2"
                        show={() => props.showProjectDetail('2')}
                        isOpen={currProjectDetail('2')}
                        closeProject={props.closeProjectDetail} />
                    <Project
                        id="3"
                        show={() => props.showProjectDetail('3')}
                        isOpen={currProjectDetail('3')}
                        closeProject={props.closeProjectDetail} />
                    <Project
                        id="4"
                        show={() => props.showProjectDetail('4')}
                        isOpen={currProjectDetail('4')}
                        closeProject={props.closeProjectDetail} />
                    <Project
                        id="5"
                        show={() => props.showProjectDetail('5')}
                        isOpen={currProjectDetail('5')}
                        closeProject={props.closeProjectDetail} />
                </div>
            </div>
        </div>
    );
}
export default projects;