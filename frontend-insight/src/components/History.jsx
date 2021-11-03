import React from "react";
import './History.scss'
import HistoryItem from "./HistoryItem";
import { useQuery } from "react-query";
import getDetailedHistory from "../api/GetDetailedHistory";

export default function History(props) {
  const query = useQuery('history', () => getDetailedHistory(1));
  if (query.isLoading) {
    return "Loading..."
  }

  return (
    <div>
      <ul className='list'>
        <HistoryItem id="historyTitle" stock="Detailed History" holdings="Holdings" price="Price" change="Change" />
        {query.data.map(x => (
          <HistoryItem stock={x.stockticker} holdings={x.numberofstocks} price={x.purchaseprice} change="1.5%"/>
        ))}
      </ul>
    </div>
  )
}