
import './Avatar.scss';
import React, { useState, useContext } from 'react';
import img from "../images/Profile.jpg";
import { authContext } from '../providers/AuthProvider';
import 'font-awesome/css/font-awesome.min.css';
import AddBalance from './AddBalance.jsx';


export default function Avatar(props) {
  const [open, setopen] = useState(false);
  const { user, logout } = useContext(authContext);
  const [balance, setBalance] = useState(false);
  return (
    <div className="action">
      <div className="profile" onKeyPress={() => setopen(!open)}
        onClick={() => setopen(!open)}>
        <img src={img}></img>
      </div>
      {open && <div class="menu">
        <h3> {user} <br /><span>Balance: balanceamount</span></h3>
        <ul>

          <li><i class="fa fa-usd" aria-hidden="true"></i><a href="#" onClick={() => setBalance(!balance)}> Add Balance </a></li>
          {balance && <AddBalance addBalance={props.addBalance} />}
          <li><i class="fa fa-sign-out" aria-hidden="true"></i><a href="#" onClick={logout}> logout </a></li>
        </ul>
      </div>
      }
    </div>



  );
}