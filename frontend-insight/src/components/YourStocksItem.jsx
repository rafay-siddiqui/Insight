import React from "react";
import './YourStocksItem.scss'
import classNames from "classnames";

export default function YourStocksItem(props) {
  let yourStocksItemClass = classNames({
    'yourStocksItem': true,
    'yourStocksItem--header': props.header
  });

  return (
    <div className={yourStocksItemClass} >
      <h2 className="stock">{props.stock}</h2>
      <h3 className="change">{props.change}</h3>
    </div>
  )
}