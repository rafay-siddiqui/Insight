
import './Avatar.scss';
import React from 'react';
import img from "../images/Jhon.png";

import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';


export default function Avatar() {
  const { user, logout } = useContext(authContext);

    return (
      <div >
      <img src={img} className="Avatar-border"></img>
        <a href="#" onClick={logout}> logout </a>
      </div>
  );
}