import PropTypes from 'prop-types';
import './Avatar.css';
import React from 'react';
import img from "../images/AvatarImage.png";


export default function Profile() {
    

    return (
      <div >
      <img src={img} className="Avatar-border"></img>
      </div>
  );
}