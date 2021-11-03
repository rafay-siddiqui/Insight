
import './Avatar.scss';
import React, { useState, useContext } from 'react';
import img from "../images/Profile.jpg";
import { authContext } from '../providers/AuthProvider';
import { useQuery } from "react-query";
import 'font-awesome/css/font-awesome.min.css';
import AddBalance from './AddBalance.jsx';
import setBalance from '../api/SetBalance';
import getBalance from '../api/GetBalance';


export default function Avatar(props) {
  const [open, setopen] = useState(false);
  const { user } = useContext(authContext);
  const [popUp, setPopUp] = useState(false);

  const balanceQuery = useQuery('balance', () => getBalance(user));

  const updateBalance = (amount) => {
    const balance = parseFloat(balanceQuery.data.balance) + parseFloat(amount);
    return setBalance(balance, 1);
  }

  return (
    <div className="action">
      <div className="profile" onKeyPress={() => setopen(!open)}
        onClick={() => setopen(!open)}>
        <img src={img}></img>
      </div>
      {open && <div class="menu">
        <h3> {user} <br /><span>Balance: balanceamount</span></h3>
        <ul>

          <li><i class="fa fa-usd" aria-hidden="true"></i><a href="#" onClick={() => setPopUp(!popUp)}> Add Balance </a></li>
          {popUp && <AddBalance addBalance={updateBalance} />}
          <li><i class="fa fa-sign-out" aria-hidden="true"></i><a href="#" onClick={props.logout}> logout </a></li>
        </ul>
      </div>
      }
    </div>



  );
}