import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './style/style.css';
import { Link } from 'react-dom';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
     
      <Navbar  className="Bgcolor" fixed='top'  expand="md ">
        <NavbarBrand className="Textcolor" href="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto "  navbar>

            <NavItem  >
              <NavLink ><Link to="/About">About</Link></NavLink>
            </NavItem>

            <NavItem>
              <NavLink><Link to="/Projects">Projects</Link></NavLink>
            </NavItem>

            <NavItem>
              <NavLink><Link to="/Contacts">Resume</Link></NavLink>
            </NavItem>

            <NavItem>
              <NavLink activeClassName="active" className="Textcolor" to="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    
    </div>
  );
}

export default Example;