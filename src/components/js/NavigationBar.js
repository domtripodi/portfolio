import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../css/NavigationBar.css'

class NavigationBar extends React.Component {
    
    render() {
        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#gallery">Game Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="navBar-inactive navItemStyling" to="/gallery">Gallery</NavLink>
                        <NavLink className="navBar-inactive navItemStyling" to="/about">About</NavLink>
                    </Nav>
                    <Nav>
                    <NavLink className="navBar-inactive navItemStyling" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;