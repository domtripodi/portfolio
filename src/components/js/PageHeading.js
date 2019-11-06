import React from 'react'
import {Row, Col} from 'react-bootstrap';
import '../css/PageHeading.css'

class PageHeading extends React.Component {
    render() {
        return (
            <div id="pageHeadingContainer">
                <Row className="center heading-row-margin">
                    <Col>
                        <h1 id="page-heading">{this.props.mainHeading}</h1>
                        <p>{this.props.subText}</p>
                    </Col>
                </Row>
                <hr/>
            </div>
        )
    }
}

export default PageHeading;