import React from 'react';
import styles from './arrow.module.css';

const arrow = props => {
    let attachedStyles = [styles.Arrow].join(' ');
    if (props.direction === 'back') {
        attachedStyles = [styles.Arrow, styles.Back].join(' ');
    }
    else if (props.direction === 'next') {
        attachedStyles = [styles.Arrow, styles.Next].join(' ');
    }
    return (
        <svg 
            className={attachedStyles}
            onClick={props.clicked} 
            xmlns="http://www.w3.org/2000/svg" 
            width="36" 
            height="36" 
            viewBox="0 0 36 36">
            <path
                id="Path_43"
                fill="#E6E1E2"
                data-name="Path 43"
                d="M102.455,16.6,129.725.575a5.172,5.172,0,0,1,4.741,0l2.008,1.18a1.479,1.479,0,0,1,0,2.785l-22.9,13.453L136.5,31.46a1.48,1.48,0,0,1,0,2.785l-2.008,1.179a5.172,5.172,0,0,1-4.741,0L102.455,19.39a1.69,1.69,0,0,1-.977-1.4A1.689,1.689,0,0,1,102.455,16.6Z"
                transform="translate(-101.478)" />
        </svg>
    );
}
export default arrow;