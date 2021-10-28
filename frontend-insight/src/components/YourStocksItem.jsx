import React from "react";
import './YourStocksItem.scss'

export default function YourStocksItem(props) {
  return (
    <div className="yourStocksItem" >
      <h2 className="stock">{props.stock}</h2>
      <h3 className="change">{props.change}</h3>
    </div>
  )
}