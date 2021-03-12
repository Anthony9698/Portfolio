import React from 'react';
import styles from './contact.module.css';

const contact = props => {
    return (
        <div className={styles.Contact} id={props.id}>
            <div className={styles.Title}>Contact</div>
        </div>
    );
}

export default contact;