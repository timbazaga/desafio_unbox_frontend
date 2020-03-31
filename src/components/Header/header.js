import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './header.css';

const Header = () => (
    <Navbar bg="light" expand="lg" className={"app-header"}>
        <Navbar.Brand href="/">Desafio Unbox Culture</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/filmes">Filmes</Nav.Link>
                <Nav.Link href="/generos">Gêneros</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
