import React, { Component } from 'react';
import styles from './contactForm.module.css';
import Input from './Input/Input';

class ContactForm extends Component {
    state = {

    }
    submitHandler = event => {
        console.log("Form submitted!!!");
        event.preventDefault();
    }
    render() {
        return(
            <form className={styles.Form} onSubmit={this.submitHandler}>
                <Input label="Name" type="text" />
                <Input label="Subject" type="text" />
                <Input label="Email" type="email" />
                <Input label="Message" type="textarea" />
                <Input type="submit" value="Send" />
            </form>
        );
    }
}

export default ContactForm;