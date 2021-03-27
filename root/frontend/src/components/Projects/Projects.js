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

    let projects = props.projects.map(project => {
        return <Project
            key={project._id}
            id={project._id}
            title={project.title}
            summary={project.summary}
            description={project.description}
            imageAlbum={project.imageAlbum}
            tags={project.tags}
            url={project.url}
            show={() => props.showProjectDetail(project._id)}
            isOpen={currProjectDetail(project._id)}
            closeProject={props.closeProjectDetail} />;
    });

    return (
        <div className={styles.Projects} id={props.id}>
            <div className={styles.Title}>{props.title}</div>
            <div className={styles.Content}>
                <div className={styles.Description}><p>{props.description}</p></div>
                <div className={styles.ProjectsDisplay}>
                    {projects}
                </div>
            </div>
        </div>
    );
}
export default projects;