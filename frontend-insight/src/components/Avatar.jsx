
import './Avatar.scss';
import React from 'react';
import img from "../images/Jhon.png";

import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';


export default function Avatar() {
  const { user, logout } = useContext(authContext);

    return (
      <div >
      <img src={img} className="Avatar-border" role="button"></img>
        <a href="#" onClick={logout}> logout </a>
       
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
  <a href="#" onClick={logout}> logout </a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
      
  );
}