import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/esm/NavLink";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { CiSearch } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { BiBriefcaseAlt2 } from 'react-icons/bi';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import "./nav.css";
// import Topnav from './Topnav';

const BottomNav = () => {
  const [show, setShow] = useState(false);
  const [talent, setTalent] = useState(false);
  const [work, setWork] = useState(false);
  const [upWork, setUpWork] = useState(false);
  const showDropDown = () => {
    setShow(!show);
  };
  const hideDropDown = () => {
    setShow(false);
  };
  const showTalent = () => {
    setTalent(!talent);
  };

  const hideTalent = () => {
    setTalent(false);
  };

  const showWork = () => {
    setWork(!work);
  };

  const hideWork = () => {
    setWork(false);
  };

  const upWorkSeen = () => {
    setUpWork(!upWork)
  }

  const upWorkHidden =()=> {
    setUpWork(false)
  }
  
  return (
    <div className="whole-nav">
        <Navbar collapseOnSelect expand="lg" className="nav-wrapper" bg="white" variant="white">
      <div className="nav-container">
        <Navbar.Brand className="logo">upwork</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown 
            title="Find Talent"
            talent={talent}
            onMouseEnter={showTalent}
            onMouseLeave={hideTalent} 
            id="collasible-nav-dropdown">
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
            <NavDropdown 
            title="Find Work"
            upWork={upWork}
            onMouseEnter={upWorkSeen}
            onMouseLeave={upWorkHidden} 
            id="collasible-nav-dropdown">
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
            <NavDropdown 
            title="Why Upwork" 
            work={work}
            onMouseEnter={showWork}
            onMouseLeave={hideWork}
            id="collasible-nav-dropdown">
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
            <div className="search-area">
              <CiSearch className="icon"/>
              <input type="text" className="input-part"/>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Talent
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="drop-talent-items">
                    <div>
                    <IoPeopleOutline />
                    </div>
                    <div>
                      <h6>Talent</h6>
                      <p>Hire Professionals and agencies</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="drop-talent-items">
                  <div>
                    <BsFillCalendar2CheckFill/>
                    </div>
                    <div>
                      <h6>Projects</h6>
                      <p>Buy ready-to-start services</p>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="drop-talent-items">
                  <div>
                    <BiBriefcaseAlt2 />
                    </div>
                    <div>
                      <h6>Jobs</h6>
                      <p>Apply to jobs posted by clients</p>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <NavLink>Login</NavLink>
            <button className="btn btn-success">Sign Up</button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
        className="second-nav"
      >
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav-items">
              <Nav.Link href="#features" className="nav-item1">
                Development & IT
              </Nav.Link>
              <Nav.Link href="#features" className="nav-item2">
                Design & Creative
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-item3">
                Sales & Marketing
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-item4">
                Writing & Translation
              </Nav.Link>
              <Nav.Link href="#pricing" className="nav-item5">
                Admin & Customer Support
              </Nav.Link>
              <NavDropdown
                title="More"
                show={show}
                onMouseEnter={showDropDown}
                onMouseLeave={hideDropDown}
                className="nav-item6"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Finance & Accounting
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  HR & Training
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Legal</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Engineering & Architecture
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  See all specializations
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default BottomNav;
