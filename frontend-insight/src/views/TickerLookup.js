import React, { useState } from "react";
import TickerSearchBar from "../components/TickerSearchBar";
import { searchTicker, hyperlinkTicker } from "../helper/fetchers";
import TickerResult from "../components/TickerResult"
import './TickerLookup.scss'

export default function TickerLookup(props) {

  const [ticker, setTicker] = useState("")
  const [results, setResults] = useState([])

  const createGraph = (event) => {
    event.preventDefault();
    searchTicker(ticker)
      .then((res) => setResults(res)
      )
  }

  return (
    <div className="tickerLookup">

      <TickerSearchBar value={ticker} onChange={setTicker} onClick={createGraph} />
      <div className="tickerResults">
        <h2>Results</h2>
        {/* Iterate similar ticker results from API */}
        {results.map(result => (
          <TickerResult onClick={ () => {props.onClick(result.symbol)}} ticker={result.symbol} company={result.name} />
        ))}
      </div>
      
    </div>
  );

}