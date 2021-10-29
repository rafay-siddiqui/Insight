import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "../Navbar/NavbarElements";

import React from "react";

function NavbarMenu() {
  return (
    <Nav>
      <NavbarContainer>
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

export default NavbarMenu;
