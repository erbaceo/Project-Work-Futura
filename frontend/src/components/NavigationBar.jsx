import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router';

function NavigationBar() {
  return (
    <Navbar expand="md" bg="dark" variant="dark" className="mb-5 border-bottom border-secondary">
      <Container fluid> 
        <Navbar.Brand as={Link} to="/brand" className="me-5">
            <img
              alt=""
              src="src/assets/logo.png"
              width="60"
              className="d-inline-block align-top bg-white rounded-circle"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/"
              end 
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/ordini"
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Ordini
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;