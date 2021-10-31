
import './Avatar.scss';
import React, {useState} from 'react';
import img from "../images/Profile.jpg";
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';
import 'font-awesome/css/font-awesome.min.css';


export default function Avatar(props) {
  const [open, setopen] = useState(false);
  const { user, logout } = useContext(authContext);
  
 
      
    return (
      <div className="action">
      <div className="profile" onKeyPress={() => setopen(!open)}
        onClick={() => setopen(!open)}>
      <img src={img}></img>
      </div>
       {open && <div class="menu">
        <h3> Jone Jone <br/><span>Balance: prop.balanceamount</span></h3> 
        <ul>
         
          <li><i class="fa fa-usd" aria-hidden="true"></i><a href="#" onClick={logout}> Add Balance </a></li>
          <li><i class="fa fa-sign-out" aria-hidden="true"></i><a href="#" onClick={logout}> logout </a></li>
        </ul>
     </div> 
}
</div>       
      

     
    );
}