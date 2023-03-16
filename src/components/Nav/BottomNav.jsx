import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './nav.css';

const BottomNav = ()=> {
  const [show, setShow] = useState(false)
  const showDropDown = () => {
    setShow(!show)
  }
  const hideDropDown =() => {
    setShow(false)
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className='second-nav'>
      <div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-items">
          <Nav.Link href="#features" className="nav-item1">Development & IT</Nav.Link>
            <Nav.Link href="#features" className="nav-item2">Design & Creative</Nav.Link>
            <Nav.Link href="#pricing" className="nav-item3">Sales & Marketing</Nav.Link>
            <Nav.Link href="#pricing" className="nav-item4">Writing & Translation</Nav.Link>
            <Nav.Link href="#pricing" className="nav-item5">Admin & Customer Support</Nav.Link>
            <NavDropdown title="More" show={show} onMouseEnter={showDropDown} onMouseLeave={hideDropDown} className='nav-item6' id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Finance & Accounting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                 HR & Training
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Legal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Engineering & Architecture</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                See all specializations
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}


export default BottomNav;
