import React from "react";

import "./Button.css"

function Button(props) {
  return (
    <button id={props.id} className="button" onClick={props.onClick} >{props.label}</button>
  )
};

export default Button;