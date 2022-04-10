import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <div className="header">
            <h2>Let's Keep in Touch!</h2>
            <Form id="form"> 
                <Form.Group controlId="formBasicEmail">
                    <Form.Label id="form-label">Email address</Form.Label>
                    <Form.Control id="form-input" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label id="form-label">Password</Form.Label>
                    <Form.Control id="form-input" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label id="form-label">Message</Form.Label>
                    <Form.Control id="form-input" as="textarea" rows={3} type="message" placeholder="Message" />
                </Form.Group>
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