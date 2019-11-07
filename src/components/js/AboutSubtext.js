import React from 'react';
import { Col, Row } from 'react-bootstrap';

class AboutSubtext extends React.Component {
    
    render() {
        return (
                <Row>
                    <Col>
                        <p>{this.props.text}</p>
                    </Col>
                </Row>
        )
    }
}

export default AboutSubtext;