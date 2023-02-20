import React from "react";
import { Nav, Navbar} from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        
          {/* <Navbar.Brand href="#home">MentNotes</Navbar.Brand> */}
          <Navbar.Brand >MentNotes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Nav.Link>Link</Nav.Link>
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
      
      </Navbar>
    </div>
  );
};

export default Header;
