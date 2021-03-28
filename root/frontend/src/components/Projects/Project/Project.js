import React from 'react';
import styles from './project.module.css';
import projectPlaceholder from '../../../assets/Projects/Placeholders/empty.jpg';
import ProjectDetail from './ProjectDetail/ProjectDetail';

const project = props => {
    let coverImg = projectPlaceholder;
    if (props.imageAlbum[0]) {
        coverImg = props.imageAlbum[0];
    }
    return (
        <div className={styles.Project}>
            <div className={styles.Overlay}>
                <div className={styles.CoverImgWrapper} onClick={props.show}>
                    <img className={styles.CoverImg} src={coverImg} alt="project cover" />
                </div>
                <div className={styles.LearnMore}><button onClick={props.show}>Learn More</button></div>
                <div className={styles.ProjectTitle}>{props.title}</div>
            </div>
            <ProjectDetail
                projectId={props.id}
                close={props.closeProject}
                open={props.isOpen}
                title={props.title}
                summary={props.summary}
                description={props.description}
                imageAlbum={props.imageAlbum}
                tags={props.tags}
                url={props.url} />
        </div>
    );
}

export default project;