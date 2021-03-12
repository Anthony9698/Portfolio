import React from 'react';
import styles from './contact.module.css';
import ContactForm from './ContactForm/ContactForm';

const contact = props => {
    return (
        <div className={styles.Contact} id={props.id}>
            <div className={styles.Title}>Contact</div>
            <ContactForm />
        </div>
    );
}

export default contact;