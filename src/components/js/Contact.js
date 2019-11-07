import React from 'react';
import PageHeading from './PageHeading';
import Form from 'react-bootstrap/Form'
import { Container } from 'react-bootstrap';

class Contact extends React.Component {
    
    render() {
        return (
            <Container id="contact-container">
                <PageHeading mainHeading="Contact" subText="Feel free to contact me" />
                    <Form className="form-styles">
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="form-styles"  type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" placeholder="Message to send me" />
                        </Form.Group>
                    </Form>
                

            </Container>
            
        )
    }
}

export default Contact;