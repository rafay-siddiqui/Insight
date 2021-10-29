import React from 'react';
import { useState,useContext } from "react";
import  { Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import { authContext } from "../providers/AuthProvider";
//import Button from "../Button";
import LoginInfo from "../components/LoginInfo";
import Login from "../components/Login";
import Home from '.';
import {Nav, NavbarContainer,NavMenu,NavItem} from '../components/Navbar/NavbarElements';

function PortfolioPage() {
    const { auth } = useContext(authContext);
    return (
        <div>
        {!auth && <Redirect to='/'  />}
        {auth &&  <Redirect to='/portfolio'  />} 
      
     
    <Navbar>
     
    
   
    </Navbar>
        
    {auth && <LoginInfo/>} 
    
   
     <h1>PortfolioPage </h1>
        </div>
    )
}

export default PortfolioPage;