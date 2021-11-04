import React from "react";
import './HistoryItem.scss'

export default function HistoryItem(props) {
  return (
    <div className="historyItem" >
      <h5>{props.stock}</h5>
      <h5>{props.holdings}</h5>
      <h5>{props.date}</h5>
      <h5>{props.amount}</h5>
    </div>
  )
}