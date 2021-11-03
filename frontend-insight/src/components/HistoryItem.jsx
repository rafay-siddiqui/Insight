import React from "react";
import './HistoryItem.scss'

export default function HistoryItem(props) {
  return (
    <div className="historyItem" >
      <h2>{props.stock}</h2>
      <h2>{props.holdings}</h2>
      <h2>{props.price}</h2>
      <h2>{props.change}</h2>
    </div>
  )
}