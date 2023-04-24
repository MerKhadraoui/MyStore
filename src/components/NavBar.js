import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import "./NavBar.css";
function NavBar() {
  return (
    <Navbar bg="light" className='nav-bar' style={{ maxWidth:"1800px" }}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            // className="m-xl-5 d-inline-block bg-primary"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link> 
            {/* <Nav.Link href="/login">Login</Nav.Link>  */}
          </Nav>
          {/* <Form className="d-flex search ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
              <Badge   bg="secondary" as="Button">
      Search
    </Badge>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;