import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo-0.jpg';
class Header extends React.Component
{
  render()
  {
    return (
        <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
        <div class="container">
          <a href="#" class="navbar-brand">
         
            <img src={logo} width="45" alt="" class="d-inline-block align-middle mr-2"></img>
           
            <span class="text-uppercase font-weight-bold" >INSIGHT</span>
          </a>
      
          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>
      
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a href="#" class="nav-link">Home <span class="sr-only"></span></a></li>
              <li class="nav-item"><a href="#" class="nav-link">About</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
              <li class="nav-item"><a href="#" class="nav-link">Login</a></li>
 
            </ul>
          </div>
        </div>
      </nav>
     
     
      
    )
  }
}
export default Header;