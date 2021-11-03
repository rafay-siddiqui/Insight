import React from "react";
import "./Button.scss"

import classNames from 'classnames';

export default function Button(props) {
  let buttonClass = classNames({
    'button': true,
    'button--login': props.login,
    'button--chart': props.chart,
    'button--nav': props.nav,
    'button--tab': props.tab,
    'button--inisght': props.insight,
    'button--tickersearch': props.tickersearch,
    'button--tickerresultitem': props.tickerresultitem,
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
};