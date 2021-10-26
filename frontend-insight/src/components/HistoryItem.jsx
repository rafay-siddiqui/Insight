import React from "react";
import './HistoryItem.css'

export default function HistoryItem(props) {
  return (
    <li id={props.id} className="historyItem" >
      <h2 className={props.infoClass}>{props.stock}</h2>
      <h2 className={props.infoClass}>{props.holdings}</h2>
      <h2 className={props.infoClass}>{props.price}</h2>
      <h2 className={props.infoClass}>{props.change}</h2>
    </li>
  )
}