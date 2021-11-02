import React, { useState, useContext, useEffect } from "react";
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
import { authContext } from "../../providers/AuthProvider";
import Balance from "../Balance";


function Navbar(props) {
  const { auth, user } = useContext(authContext);

  // useEffect(() => {
  // }, [user]);

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

          {user && <Balance/>}

          <Avatar addBalance={props.addBalance} />
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
