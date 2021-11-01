import React, {useState} from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  BalShow,
} from "./NavbarElements";
import logo from "../../images/logo-nobg.png";
import Avatar from "../Avatar";
import { useContext } from "react";

function Navbar() {

  const [balanceVal, setBalanceVal] = useState(200);

  const balanceSetter = (amount) => {
    setBalanceVal(prevState => prevState + parseInt(amount))
  }
const sticky = {
  
    position: "fixed",
    top: "0",
    width: "100%"
  };



  return (
    <Nav style ={sticky}>
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
         
            <BalShow>Balance: {balanceVal} </BalShow>
         
          <Avatar addBalance={balanceSetter} />
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
