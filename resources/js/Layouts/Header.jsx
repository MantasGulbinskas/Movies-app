import React, { useState } from 'react';
import {Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from '@inertiajs/inertia-react';

import '../../scss/Navbar/Header.scss';

import Basket from '@/Components/Basket/Basket';
import Admin from '@/Components/Admin/Admin';

function Header() {


  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0 navBar"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#contact">
              Contact
            </Nav.Link>
                  </Nav>
                  <Link href='/admin'>
                      <Admin />
                  </Link>
                  <Link href="/cart">
                      <Basket />
                  </Link>
                  <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button className='search-button'>Search</button>
          </Form>
        </Navbar.Collapse>
          </Container>
               </Navbar>
  );
}

export default Header;