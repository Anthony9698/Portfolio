import React from 'react';
import styles from './footer.module.css';

const footer = props => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.SocialLinks}>
                <a href="https://github.com/Anthony9698">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32.001" height="30.453" viewBox="0 0 32.001 30.453">
                        <g id="github-sign" transform="translate(-1 -3)">
                            <g id="Group_137" data-name="Group 137" transform="translate(1 3)">
                                <path id="Path_48" data-name="Path 48" d="M30.24,1.675A5.93,5.93,0,0,0,26,0H6A5.931,5.931,0,0,0,1.76,1.675,5.371,5.371,0,0,0,0,5.71V24.744a5.37,5.37,0,0,0,1.76,4.035A5.93,5.93,0,0,0,6,30.454h4.667a5.918,5.918,0,0,0,.687-.029.816.816,0,0,0,.458-.258.9.9,0,0,0,.229-.664q0-.059-.011-1.348t-.011-2.042l-.479.079a6.438,6.438,0,0,1-1.156.069,9.335,9.335,0,0,1-1.448-.139,3.328,3.328,0,0,1-1.4-.595,2.525,2.525,0,0,1-.917-1.219l-.208-.456A4.917,4.917,0,0,0,5.76,22.84a2.484,2.484,0,0,0-.906-.754l-.146-.1a1.506,1.506,0,0,1-.271-.238,1.1,1.1,0,0,1-.187-.278q-.063-.139.1-.228a1.416,1.416,0,0,1,.6-.089l.417.059a3.107,3.107,0,0,1,1.031.476,3.269,3.269,0,0,1,1.01,1.031A3.559,3.559,0,0,0,8.573,23.96a2.537,2.537,0,0,0,1.365.427,6.211,6.211,0,0,0,1.188-.1,4.3,4.3,0,0,0,.937-.3,3.156,3.156,0,0,1,1.021-2.042,14.926,14.926,0,0,1-2.136-.357,8.757,8.757,0,0,1-1.958-.773,5.552,5.552,0,0,1-1.677-1.328,6.275,6.275,0,0,1-1.094-2.082,9.457,9.457,0,0,1-.427-2.974,5.63,5.63,0,0,1,1.646-4.084A5.093,5.093,0,0,1,7.583,6.3a3.052,3.052,0,0,1,1.792.268,12.87,12.87,0,0,1,1.74.763q.552.317.886.535a15.779,15.779,0,0,1,8,0l.792-.476a11.465,11.465,0,0,1,1.917-.872A2.856,2.856,0,0,1,24.4,6.3a5.043,5.043,0,0,1,.166,4.044,5.631,5.631,0,0,1,1.646,4.084,9.547,9.547,0,0,1-.427,2.984,6.022,6.022,0,0,1-1.1,2.082,5.774,5.774,0,0,1-1.687,1.318,8.746,8.746,0,0,1-1.959.773,14.915,14.915,0,0,1-2.135.357,3.44,3.44,0,0,1,1.083,2.815V29.5a1.222,1.222,0,0,0,.1.545.566.566,0,0,0,.334.288,1.923,1.923,0,0,0,.407.1,4.913,4.913,0,0,0,.51.02H26a5.928,5.928,0,0,0,4.239-1.675A5.37,5.37,0,0,0,32,24.743V5.71A5.371,5.371,0,0,0,30.24,1.675Z" transform="translate(0 0)" />
                            </g>
                        </g>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/anthony-viera-4b58031aa/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30.45" viewBox="0 0 32 30.45">
                        <path id="linkedin_1_" data-name="linkedin (1)" d="M29.692,0H2.308A2.254,2.254,0,0,0,0,2.2V28.254a2.254,2.254,0,0,0,2.308,2.2H29.692A2.254,2.254,0,0,0,32,28.254V2.2A2.254,2.254,0,0,0,29.692,0ZM11.351,23.016h-3.9V11.86h3.9ZM9.4,10.337H9.377A1.975,1.975,0,0,1,7.224,8.41a1.993,1.993,0,0,1,2.2-1.928A1.984,1.984,0,0,1,11.607,8.41a1.992,1.992,0,0,1-2.2,1.927Zm16,12.679h-3.9V17.048c0-1.5-.564-2.523-1.974-2.523a2.125,2.125,0,0,0-2,1.356,2.425,2.425,0,0,0-.128.9v6.23h-3.9s.051-10.109,0-11.156h3.9v1.58A3.9,3.9,0,0,1,20.915,11.6c2.564,0,4.486,1.594,4.486,5.021Zm0,0" transform="translate(0)" />
                    </svg>
                </a>
            </div>
            <div className={styles.CopyRight}>{props.children}</div>
        </footer>
    )
}

export default footer;