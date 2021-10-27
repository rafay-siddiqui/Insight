import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/logo-nobg.png";
import { useContext } from 'react';
import { authContext } from "../providers/AuthProvider";
import Info from './LoginInfo';
import Login from './Login';

export default function Header() {
  
  const { auth } = useContext(authContext);

    return (
      <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand">
            <img
              src={logo}
              width="45"
              alt=""
              class="d-inline-block align-middle mr-2"
            ></img>

            <span class="text-uppercase font-weight-bold">INSIGHT</span>
          </a>

          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a href="#" class="nav-link">
                  Home <span class="sr-only"></span>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Services
                </a>
              </li>
            
        {!auth && <Login />}
        {auth && <Info />}
      
              <li class="nav-item">
                <a href="#" class="nav-link">
               Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }


