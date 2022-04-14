import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const {name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if(!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
        console.log(errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="contact">
            <h1>Contact me</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input className="input" type="text" name="name" defaultValue={name} onChange={handleChange}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input className="input" type="email" name="email" defaultValue={email} onChange={handleChange}/>
                </div>
                <div>
                    <label className="form-label" htmlFor="message">Message:</label>
                    <textarea className="input" type="message" rows="5" defaultValue={message} onChange={handleChange}/>
                </div>
                
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button id="button" type="submit">Submit</button>
            </form>
        </section>
    )
};

export default Contact;