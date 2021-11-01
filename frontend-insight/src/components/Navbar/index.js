import React, { useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  BalShow,
} from "./NavbarElements";
import logo from "../../images/logo-nobg.png";
import Avatar from "../Avatar";


function Navbar(props) {
  const sticky = {

    position: "fixed",
    top: "0",
    width: "100%"
  };
  return (
    <Nav style={sticky}>
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

          {props.balance && <BalShow>Balance: {props.balance} </BalShow>}

          <Avatar addBalance={props.addBalance} />
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
