import React from "react";
import Container from "react-bootstrap/Container";
import NavLink from "react-bootstrap/esm/NavLink";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiSearch } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';



const Topnav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href="#home">upwork</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Find Talent" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Find Work" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Why Upwork" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Enterprise</Nav.Link>
          </Nav>
          <Nav>
            <div>
              <CiSearch />
              <input type="text" />
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Talent
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <div>
                    <IoPeopleOutline />
                    </div>
                    <div>
                      <h4>Talent</h4>
                      <p>Hire Professionals and agencies</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                  <div>
                    <BsFillCalendar2CheckFill/>
                    </div>
                    <div>
                      <h4>Projects</h4>
                      <p>Buy ready-to-start services</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                  <div>
                    <BiBriefcaseAlt2 />
                    </div>
                    <div>
                      <h4>Jobs</h4>
                      <p>Apply to jobs posted by clients</p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <NavLink>Login</NavLink>
            <NavLink>Sign Up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topnav;
