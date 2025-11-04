import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';

function NavBarMenuApp() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/home">
          <strong>React Labs</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab01">
              Laboratorium 1
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab02">
              Laboratorium 2
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab3">
              Laboratorium 3
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab4">
              Laboratorium 4
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lab5">
              Laboratorium 5
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/lab4/add" className="btn btn-success btn-sm text-white">
              Dodaj osobę
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenuApp;
