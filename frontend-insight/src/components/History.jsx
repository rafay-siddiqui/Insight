import React from "react";
import './History.scss'
import HistoryItem from "./HistoryItem";

export default function History(props) {
  return (
    <ul className='list'>
      <HistoryItem id="historyTitle" stock="Stock Ticker" holdings="Holdings" price="Price" change="Change" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="AAPL" holdings="5" price="$120" change="1.4%" />
    </ul>
  )
}