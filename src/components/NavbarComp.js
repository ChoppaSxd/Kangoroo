import React, { Component } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import logo from "../images/Logo.png";
import "../components/NavBarComp.css";

class NavbarComp extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Kangoroo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="Buttons">
                                <Nav.Link href="#home">Головна</Nav.Link>
                                <Nav.Link href="#link">Новини</Nav.Link>
                                <Nav.Link href="#link">Переваги</Nav.Link>
                                <Nav.Link href="#link">Галерея</Nav.Link>
                                <Nav.Link href="#link">Контакти</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComp;