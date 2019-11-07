import React from 'react';
import { Col, Row } from 'react-bootstrap';

class AboutHeading extends React.Component {
    
    render() {
        return (
                <Row>
                    <Col>
                        <h2>{this.props.heading}</h2>
                    </Col>
                </Row>
        )
    }
}

export default AboutHeading;