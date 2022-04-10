import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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

    function handelSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div className="header">
            <h2>Let's Keep in Touch!</h2>
            <Form id="form" onSubmit={handelSubmit}> 
                <Form.Group>
                    <Form.Label id="form-label">Name</Form.Label>
                    <Form.Control id="form-input" type="name" placeholder="Your Name" defaultValue={name} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label id="form-label">Email address</Form.Label>
                    <Form.Control id="form-input" type="email" placeholder="Your email" defaultValue={email} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label id="form-label">Message</Form.Label>
                    <Form.Control id="form-input" as="textarea" rows={3} type="message" placeholder="Message" defaultValue={message} onChange={handleChange} />
                </Form.Group>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <div className="form-button">
                    <Button id="button" variant="primary" type="submit">
                        Submit
                    </Button>
                </div>

            </Form>
        </div>
    )
};

export default Contact;