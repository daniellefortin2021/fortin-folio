import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
    return (
        <div className="header">
            <h2>Let's Keep in Touch!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        I'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button id="button" variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    )
};

export default Contact;