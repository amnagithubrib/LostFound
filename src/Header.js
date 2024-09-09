// Header.js

import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './Header.css';
import logo from "./imgs/logo.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="custom-navbar py-3 pl-3">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-brand" style={{ paddingLeft: 30 }}>
          <img
            src={logo}
            width="120"
            height="110"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <NavLink href="/lost" className="nav-link">SUBMIT LOST ITEM</NavLink>
            <NavLink href="/submitform" className="nav-link">SUBMIT FOUND ITEM</NavLink>
            <NavLink href="/report" className="nav-link">VIEW RECENT POSTS</NavLink>
            <NavLink href="/login" className="nav-link">LOGIN</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;