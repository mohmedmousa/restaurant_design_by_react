import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'
import logo from './../../data/logo.png'
 const Navs=()=> {
  return (
    <Navbar className='root fixed-top bg-light' collapseOnSelect expand="lg"  variant="dark">
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt=''/> </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className=' bg-dark px-1'/>
      
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
        <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About us" >About us</Nav.Link>
            <Nav.Link href="#Explore" >Explore Foods</Nav.Link>
            <Nav.Link href="#Reviews" >Reviews</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets"className='number'>0123456789</Nav.Link>
          </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>


      
    
  )
}
export default Navs