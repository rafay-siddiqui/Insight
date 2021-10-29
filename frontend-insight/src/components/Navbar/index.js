import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../images/logo-nobg.png";

import { useContext } from "react";

function Navbar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} height="100" width="100" padding="24px" alt=""></img>{" "}
          INSIGHT
        </NavLogo>

        <NavMenu>
          <NavItem>
            <NavLinks to="/portfolio">Portfolio</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/stock">Stock</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem></NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
