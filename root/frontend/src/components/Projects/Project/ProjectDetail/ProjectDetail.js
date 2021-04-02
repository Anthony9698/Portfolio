import React from 'react';
import styles from './projectDetail.module.css';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Carousel from '../../../../containers/Project/ProjectDetail/Carousel/Carousel';

const projectDetail = props => {
    let attachedStyles = [styles.Detail, styles.Close].join(' ');
    if (props.open) {
        attachedStyles = [styles.Detail, styles.Open].join(' ');
    }
    let tags;
    if (props.tags) {
	tags = props.tags.map((tag, index) => <button key={index}>{tag}</button>);
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close} />
            <div className={attachedStyles}>
                <div className={styles.MainContent}>
                    <Carousel closeProjectDetail={props.close} imageAlbum={props.imageAlbum} />
                    <div className={styles.Description}>
                        <div className={styles.Title}>{props.title}</div>
                        <div className={styles.QuickSummary}>{props.summary}</div>
                        <div className={styles.Summary}><p>{props.description}</p></div>
                        <div className={styles.TagContainer}>
                            <div className={styles.Tags}>
                                {tags}
                            </div>
                        </div>

                        <div className={styles.ViewMore}>
                            {props.url ?
                                <a
                                    href={props.url}
                                    target="_blank"
                                    rel="noreferrer noopener">
                                    <button>View Site</button>
                                </a> : null}
                        </div>
                    </div>
                </div>
            </div >
        </Aux>
    );
}

export default projectDetail;
