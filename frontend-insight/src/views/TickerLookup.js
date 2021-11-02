import React, { useState } from "react";
import TickerSearchBar from "../components/TickerSearchBar";
import { searchTicker, hyperlinkTicker } from "../helper/fetchers";
import TickerResult from "../components/TickerResult"
import './TickerLookup.scss'
import BuyStock from '../components/BuyStock';
import PostPurchase from "../api/PostPurchase";
import { useMutation } from "react-query";

export default function TickerLookup(props) {

  const [ticker, setTicker] = useState("")
  const [results, setResults] = useState([])

  const [stocksAmount, setStocksAmount] = useState(0)

  const createGraph = (event) => {
    event.preventDefault();
    searchTicker(ticker)
      .then((res) => setResults(res)
      )
  }

  const purchaseStock = useMutation('purchase', () => PostPurchase(props.data.symbol, 1, props.data.historical[0].date, props.data.historical[0].close, stocksAmount))

  return (
    <div className="tickerLookup">
      <h1>Ticker Lookup</h1>
      <TickerSearchBar value={ticker} onChange={setTicker} onClick={createGraph} />
      <div className="tickerResults">
        <h2>Results</h2>
        {/* Iterate similar ticker results from API */}
        {results.map(result => (
          <TickerResult onClick={() => { props.onClick(result.symbol) }} ticker={result.symbol} company={result.name} />
        ))}
      </div>
      <BuyStock value={stocksAmount} onChange={setStocksAmount} onClick={purchaseStock} />
    </div>
  );

}