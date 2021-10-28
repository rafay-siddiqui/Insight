import React, { useState } from "react";
import TickerSearchBar from "../components/TickerSearchBar";
import searchTicker from "../helper/fetchers";
import TickerResult from "../components/TickerResult"
import './TickerLookup.scss'

// import { LineChart, Line } from 'recharts';

export default function TickerResultsPage(props) {
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
      <h1>Ticker Lookup</h1>
      <TickerSearchBar value={ticker} onChange={setTicker} onClick={createGraph} />
      <div className="tickerResults">
        <h2>Results</h2>
        {/* Iterate similar ticker results from API */}
        {results.map(result => (
          <TickerResult ticker={result.symbol} company={result.name} />
        ))}
      </div>

    </div>
  );

}