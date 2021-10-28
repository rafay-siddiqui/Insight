import React from 'react';
import {Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import logo from "../../images/logo-nobg.png";

function Navbar() {
    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                <img src={logo} height="200" width="200" padding="24px" alt=""  ></img>INSIGHT
                </NavLogo>
                
               <NavMenu>
                   
               <NavItem>
                <NavLinks to="Portfolio">Portfolio</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to="Model">Model</NavLinks>
                </NavItem>

               
                <NavItem>
                <NavLinks to="about">About</NavLinks>
                </NavItem>

                <NavItem>
                <NavLinks to="Register">Get Started</NavLinks>
                </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/SingIn">SignIn</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
    );
};

export default Navbar;
