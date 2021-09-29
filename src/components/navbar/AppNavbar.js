import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';


function AppNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">TodoList</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
            </Nav>
            <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
               MidhunBalan
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default AppNavbar
