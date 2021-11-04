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
      <h5 className="stock">{props.stock}</h5>
      <h5 className="change">{props.change}</h5>
    </div>
  )
}