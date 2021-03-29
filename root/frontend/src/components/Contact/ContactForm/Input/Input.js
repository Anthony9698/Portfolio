import React from 'react';
import styles from './input.module.css';

const input = props => {
    let input = <input className={styles.InputElement} type={props.type} value={props.value} />;
    let attachedStyles = styles.Input;
    if (props.type === 'textarea') {
        input = <textarea className={styles.InputElement} rows="6" cols="64" />
    }
    return (
        <div className={attachedStyles}>
            <label className={styles.Label}>{props.label}</label>
            {input}
        </div>
    );
}

export default input;