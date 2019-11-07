import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import '../css/NavigationBar.css'

class NavigationBar extends React.Component {
    
    render() {
        return (
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Game Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="navBar-inactive navItemStyling" to="/portfolio/gallery">Gallery</NavLink>
                        <NavLink className="navBar-inactive navItemStyling" to="/portfolio/about">About</NavLink>
                    </Nav>
                    <Nav>
                    <NavLink className="navBar-inactive navItemStyling" to="/portfolio/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;