import React, { Component } from 'react';
import styles from './contactForm.module.css';
import Input from './Input/Input';

class ContactForm extends Component {
    state = {

    }
    render() {
        return(
            <form className={styles.Form}>
                <Input label="Name" type="text" />
                <Input label="Subject" type="text" />
                <Input label="Email" type="email" />
                <Input label="Message" type="textarea" />
            </form>
        );
    }
}

export default ContactForm;