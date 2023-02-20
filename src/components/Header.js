import React from "react";
import { Nav, Navbar, Container} from 'react-bootstrap'


const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          
          <Navbar.Brand href="/">MentNotes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/notes">Notes</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
