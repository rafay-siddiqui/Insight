import React from "react";
import './History.css'
import HistoryItem from "./HistoryItem";

export default function History(props) {
  return (
    <ul className="history">
      <HistoryItem stock="Apple (AAPL)" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="Apple (AAPL)" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="Apple (AAPL)" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="Apple (AAPL)" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="Apple (AAPL)" holdings="5" price="$120" change="1.4%" />
    </ul>
  )
}