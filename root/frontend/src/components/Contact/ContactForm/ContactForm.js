import React, { Component } from 'react';
import styles from './contactForm.module.css';
import Input from './Input/Input';
import axios from 'axios';

class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        status: "Send"
    }
    submitHandler = event => {
        event.preventDefault();
        this.setState({ status: "Sending Message..." });
        axios({
            method: "POST",
            url: "/contact",
            data: this.state,
        }).then(res => {
            if (res.data.status === "sent") {
                alert("Message Sent");
                this.setState({ name: "", email: "", message: "", status: "Send" });
            } else if (res.data.status === "failed") {
                alert("Message Failed");
            }
        })
    }
    inputChangedHandler = event => {
        const field = event.target.id;
        if (field === "name") {
            this.setState({ name: event.target.value });
        } else if (field === "email") {
            this.setState({ email: event.target.value });
        } else if (field === "subject") {
            this.setState({ subject: event.target.value });
        } else if (field === "message") {
            this.setState({ message: event.target.value });
        }
    }
    render() {
        return (
            <form className={styles.Form} onSubmit={this.submitHandler} method="POST">
                <Input
                    label="Name"
                    type="text"
                    value={this.state.name}
                    changed={this.inputChangedHandler} />
                <Input
                    label="Subject"
                    type="text"
                    value={this.state.subject}
                    changed={this.inputChangedHandler} />
                <Input
                    label="Email"
                    type="email"
                    value={this.state.email}
                    changed={this.inputChangedHandler} />
                <Input
                    label="Message"
                    type="textarea"
                    value={this.state.message}
                    changed={this.inputChangedHandler} />
                <button className={styles.Send} type="submit">{this.state.status}</button>
            </form>
        );
    }
}

export default ContactForm;