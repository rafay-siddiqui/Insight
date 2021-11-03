import React from "react";
import './HistoryItem.scss'

export default function HistoryItem(props) {
  return (
    <div className="historyItem" >
      <h5>{props.stock}</h5>
      <h5>{props.holdings}</h5>
      <h5>{props.price}</h5>
      <h5>{props.change}</h5>
    </div>
  )
}