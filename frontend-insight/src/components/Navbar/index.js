import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";
import logo from "../../images/logo-nobg.png";

function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} height="100" width="100" padding="24px" alt=""></img>{" "}
          INSIGHT
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
