import React, {Component} from 'react';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap'
import PageHeading from './PageHeading';

class About extends Component {
    
    render() {
        return (
            <div id="about-container">
                <PageHeading mainHeading="About" subText="Are you reading my journal?" />
            </div>
        )
    }
}

export default About;