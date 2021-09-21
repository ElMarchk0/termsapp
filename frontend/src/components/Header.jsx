import React, { Component } from 'react';
import {  Navbar, Container, Nav, } from 'react-bootstrap'

export class Header extends Component {

  
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>ICS114 Terminology</Navbar.Brand>
            <Nav className="me-auto">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>          
                <Nav.Link href="/new_term">Add Term</Nav.Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </div>        
    )
  }
}

export default Header
