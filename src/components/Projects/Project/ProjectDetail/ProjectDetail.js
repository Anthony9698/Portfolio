import React from 'react';
import styles from './projectDetail.module.css';
import projectPlaceholder from '../../../../assets/Projects/Placeholders/empty.jpg';

const projectDetail = () => {
    return (
        <div className={styles.Detail}>
            <div className={styles.Carousel}>
                <img className={styles.Slide} src={projectPlaceholder} alt="project slide" />
                <svg className={styles.ImgArrowPrev} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                    <path
                        id="Path_43"
                        fill="#E6E1E2"
                        data-name="Path 43"
                        d="M102.455,16.6,129.725.575a5.172,5.172,0,0,1,4.741,0l2.008,1.18a1.479,1.479,0,0,1,0,2.785l-22.9,13.453L136.5,31.46a1.48,1.48,0,0,1,0,2.785l-2.008,1.179a5.172,5.172,0,0,1-4.741,0L102.455,19.39a1.69,1.69,0,0,1-.977-1.4A1.689,1.689,0,0,1,102.455,16.6Z"
                        transform="translate(-101.478)" />
                </svg>
                <svg className={styles.ImgArrowNext} id="right-arrow_1_" data-name="right-arrow (1)" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                    <path
                        id="Path_43"
                        fill="#E6E1E2"
                        data-name="Path 43"
                        d="M136.5,16.6,109.231.575a5.172,5.172,0,0,0-4.741,0l-2.008,1.18a1.479,1.479,0,0,0,0,2.785l22.9,13.453L102.457,31.46a1.48,1.48,0,0,0,0,2.785l2.008,1.179a5.172,5.172,0,0,0,4.741,0L136.5,19.39a1.69,1.69,0,0,0,.977-1.4A1.689,1.689,0,0,0,136.5,16.6Z"
                        transform="translate(-101.478)" />
                </svg>
                <svg className={styles.Close} xmlns="http://www.w3.org/2000/svg" width="26.995" height="24" viewBox="0 0 26.995 24">
                    <g id="Group_134" data-name="Group 134" transform="translate(-1754 -19292)">
                        <g id="Group_133" data-name="Group 133">
                            <g id="right-arrow_1_" data-name="right-arrow (1)" transform="translate(1754 19292)">
                                <g id="Group_130" data-name="Group 130" transform="translate(0)">
                                    <path id="Path_43" data-name="Path 43" d="M117.039,11.064,104.923.383a1.638,1.638,0,0,0-2.106,0l-.892.786a1.207,1.207,0,0,0,0,1.857L112.1,12l-10.185,8.978a1.208,1.208,0,0,0,0,1.857l.892.786a1.638,1.638,0,0,0,2.106,0l12.127-10.69a1.216,1.216,0,0,0,0-1.863Z" transform="translate(-101.478)" fill="#e6e1e2" />
                                </g>
                            </g>
                            <g id="right-arrow_1_2" data-name="right-arrow (1)" transform="translate(1765 19292)">
                                <g id="Group_130-2" data-name="Group 130" transform="translate(0)">
                                    <path id="Path_43-2" data-name="Path 43" d="M101.912,11.064,114.028.383a1.638,1.638,0,0,1,2.106,0l.892.786a1.207,1.207,0,0,1,0,1.857L106.853,12l10.185,8.978a1.208,1.208,0,0,1,0,1.857l-.892.786a1.638,1.638,0,0,1-2.106,0l-12.127-10.69a1.216,1.216,0,0,1,0-1.863Z" transform="translate(-101.478)" fill="#e6e1e2" />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div >
    );
}

export default projectDetail;