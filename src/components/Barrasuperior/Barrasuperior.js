import React from "react";
import logo from "./imagenes/logo.jpg"
import { Navbar, Nav, Container,NavDropdown} from "react-bootstrap"

const Barrasuperior = () => {

    return (

 <div className="barra__superior"> 
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >

  <Container> 
      <a className="logo" href="/home">
        <img src={logo} width="100" height="90" alt=""/>
      </a>
      <Navbar.Brand href="/home"></Navbar.Brand> 
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home/#actividades">Actividades</Nav.Link>
          <Nav.Link href="/home/#traslados">Traslados</Nav.Link>
          {/* <Nav.Link href="/Nosotros">Nosotros</Nav.Link> */}
          <Nav.Link href="/Contacto">Contacto</Nav.Link>
          {/* <Nav.Link href="/Login">Login</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    )
    }    

export default Barrasuperior;