import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeContext from "../context/ThemeContext";

function NavScrollExample() {
  const { toggleTheme } = useContext(ThemeContext);
  return (

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" text="Bold">EpicBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Generi" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Azione</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Fantasy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Avventura
              </NavDropdown.Item>
            </NavDropdown>

            <Form>
              <Col xs={1} className="text-center">
                <Button variant="primary" className="me-2" onClick={toggleTheme}> Tema</Button>
              </Col>
            </Form>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;