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
      <h4 className="stock">{props.stock}</h4>
      <h4 className="change">{props.change}</h4>
    </div>
  )
}