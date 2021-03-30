import React from 'react';
import styles from './input.module.css';

const input = props => {
    let input = <input 
        id={props.id} 
        className={styles.InputElement} 
        type={props.type} 
        value={props.value} 
        required 
        onChange={props.changed} />;
    let attachedStyles = styles.Input;
    if (props.type === 'textarea') {
        input = <textarea 
            id={props.id}
            className={styles.InputElement} 
            rows="6" 
            cols="64"
            value={props.value} 
            required 
            onChange={props.changed} />
    }
    return (
        <div className={attachedStyles}>
            <label className={styles.Label}>{props.label}</label>
            {input}
        </div>
    );
}

export default input;