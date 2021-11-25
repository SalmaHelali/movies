import React from 'react'
  import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css';
  
function Home() {
    return (
        <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movies </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <NavDropdown title="Movies" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>    
        <Nav.Link href="#pricing"> About us </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Home
