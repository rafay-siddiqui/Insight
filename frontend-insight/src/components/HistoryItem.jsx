import React from "react";
import './HistoryItem.scss'

export default function HistoryItem(props) {
  return (
    <div className="historyItem" >
      <h4>{props.stock}</h4>
      <h4>{props.holdings}</h4>
      <h4>{props.date}</h4>
      <h4>{props.change}</h4>
    </div>
  )
}