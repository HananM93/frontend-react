import React from "react";
import { Nav, Navbar, Container} from 'react-bootstrap'


const Header = () => {
  return (
    <div>
      <Navbar style={{backgroundColor: "rgb(173, 137, 38)"}}>
        <Container>
          <Navbar.Brand href="/">MentNotes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link href="/">Home</Nav.Link>
              {/* <Nav.Link href="/notes">Notes</Nav.Link> */}
              <Nav.Link href="/create">Add Note</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;



