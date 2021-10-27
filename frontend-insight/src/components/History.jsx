import React from "react";
import './History.scss'
import HistoryItem from "./HistoryItem";

export default function History(props) {
  return (
    <ul>
      <HistoryItem id="firstHistoryItem" stock="Detailed History" holdings="Holdings" price="Price" change="Change" />
      <HistoryItem stock="Apple (AAPL)" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="Apple (AAPL)" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="Apple (AAPL)" holdings="5" price="$120" change="1.4%" />
      <HistoryItem stock="Apple (AAPL)" holdings="5" price="$120" change="1.4%" />
    </ul>
  )
}