import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";
import { Link } from "react-router-dom";

function NavbarPage() {
  const [state, setState] = useState({ isOpen: false });
  const [navActive, setnavActive] = useState(1);
  const toggleCollapse = () => {
    setState({ isOpen: !state.isOpen });
  };

  return (
    <div>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Company</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem onClick={() => setnavActive(1)} active={navActive == 1}>
              <Link className="nav-link waves-effect waves-light" to="/">
                Home
              </Link>
            </MDBNavItem>
            <MDBNavItem onClick={() => setnavActive(2)} active={navActive == 2}>
              <Link className="nav-link waves-effect waves-light" to="/about">
                About
              </Link>
            </MDBNavItem>
            <MDBNavItem onClick={() => setnavActive(3)} active={navActive == 3}>
              <Link className="nav-link waves-effect waves-light" to="/contact">
                Contact
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
}

export default NavbarPage;
