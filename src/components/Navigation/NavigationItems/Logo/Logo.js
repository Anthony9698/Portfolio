import React from 'react';
import styles from './logo.module.css';

const logo = props => {
    return (
        <div className={styles.Logo} onClick={props.clicked}>
            <svg xmlns="http://www.w3.org/2000/svg" width="47.5" height="64" viewBox="0 0 47.5 64">
                <g id="Group_127" data-name="Group 127" transform="translate(932 -13073)">
                    <text
                        id="A"
                        transform="translate(-931.5 13123.5)"
                        fill="#E6E1E2"
                        stroke="#1e1e24"
                        strokeWidth="1.5"
                        fontSize="40"
                        fontFamily="RobotoMono-Medium, Roboto Mono"
                        fontWeight="500">
                        <tspan x="0" y="0">A</tspan>
                    </text>
                    <text
                        id="V"
                        transform="translate(-914 13123.5)"
                        fill="#E6E1E2"
                        stroke="#1e1e24"
                        strokeWidth="1.5"
                        fontSize="40"
                        fontFamily="RobotoMono-Medium, Roboto Mono"
                        fontWeight="500">
                        <tspan x="0" y="0">V</tspan>
                    </text>
                </g>
            </svg>
        </div>
    );
}

export default logo;