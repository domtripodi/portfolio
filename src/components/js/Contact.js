import React from 'react';
import PageHeading from './PageHeading';
import Form from 'react-bootstrap/Form'
import { Container, Button } from 'react-bootstrap';

class Contact extends React.Component {
    
    render() {
        return (
            <Container id="contact-container">
                <PageHeading mainHeading="Contact" subText="Feel free to contact me" />
                    <Form action="https://formspree.io/janedoe87583784@gmail.com" method="POST" className="form-styles">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="form-styles" name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" name="message" rows="6" placeholder="Message to send me" required />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Send Email
                        </Button>
                    </Form>
            </Container>
            
        )
    }
}

export default Contact;