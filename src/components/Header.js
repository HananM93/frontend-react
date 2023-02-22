import React from "react";
import { Nav, Navbar, Container} from 'react-bootstrap'


const Header = () => {
  return (
    <div>
      <Navbar className="color-nav" variant="dark">
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

// import { Link } from "react-router-dom";

// function Header(props) {
//   return (
//     <nav className="nav">
//       <Link to="/">
//         <div>Notes App</div>
//       </Link>
//       <Link to="/">
//         <div>Home</div>
//       </Link>
//       <Link to="/notes">
//         <div>Notes</div>
//       </Link>
//       <Link to="/create">
//         <div>Add Notes</div>
//       </Link>
//     </nav>
//   );
// }

// export default Header;