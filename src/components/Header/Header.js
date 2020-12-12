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
// import {NavLink} from 'react-dom';

const Header = (props) => {
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
              <NavLink className="Textcolor" href="/About" exact activeClassName="active">About</NavLink>
            </NavItem>

            <NavItem>
              <NavLink  className="Textcolor" href="/Projects"  exact activeClassName="active"> Projects</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="Textcolor" href="/Contacts" exact activeClassName="active" >Resume</NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="Textcolor" href="https://github.com/reactstrap/reactstrap" exact activeClassName="active">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;