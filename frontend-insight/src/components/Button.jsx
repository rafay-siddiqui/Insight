import React from "react";
import "./Button.css"
import classNames from 'classnames';

export default function Button(props) {
  let buttonClass = classNames({
    'button': true,
    'button--login': props.login,
    'button--chart': props.chart,
    'button--nav': props.nav,
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick} >
      {props.label}
    </button>
  )
};