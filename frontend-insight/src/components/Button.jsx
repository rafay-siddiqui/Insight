import React from "react";

import "./Button.css"

export default function Button(props) {
  return (
    <button id={props.id} className="button" onClick={props.onClick} >{props.label}</button>
  )
};