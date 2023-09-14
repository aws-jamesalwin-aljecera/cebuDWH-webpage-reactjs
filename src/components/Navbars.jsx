import { Container, Nav, Navbar } from "react-bootstrap";
import "../css/Navbars.css";

function Navbars() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary shadow p-0">
      <Container fluid className="min-vh-8 bg-1">
        <Navbar.Brand href="#about">
          <img src="./nav-icon-hover.png" className="main-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center menu">
            <Nav.Link href="#about" className="hover-4 mx-3 rounded">
              ABOUT
            </Nav.Link>
            <Nav.Link href="#team" className="hover-4 mx-3 rounded">
              THE TEAM
            </Nav.Link>
            <Nav.Link href="#services" className="hover-4 mx-3 rounded">
              SERVICES
            </Nav.Link>
            <Nav.Link href="#contact" className="hover-4 mx-3 rounded">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
