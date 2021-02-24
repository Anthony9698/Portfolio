import React from 'react';
import profilePic from '../../assets/Home/Profile/me.png';

const home = props => {
    return (
        <div>
            <img src={profilePic} alt="profilePic" />
            <div>Hello, I'm Anthony.</div>
            <p>
                I'm a Computer Science Graduate with a
                concentraction in Software Engineering.
            </p>
            <div>
            </div>
        </div>
    );
}

export default home;