import React from 'react';
import styles from './close.module.css';

const close = props => (
    <svg className={styles.Exit} onClick={props.closeProjectDetail} xmlns="http://www.w3.org/2000/svg" width="26.995" height="24" viewBox="0 0 26.995 24">
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
);
export default close;