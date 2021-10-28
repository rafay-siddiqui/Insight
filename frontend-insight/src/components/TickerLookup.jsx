import { React } from 'react';
import './TickerLookup.scss'
import Button from './Button';

export default function TickerLookup(props) {

  return (
    <div className="tickerLookup">

      <h1>Ticker Lookup</h1>
      <div>
        <input className="tickerSearchBar"
          type="text"
          name="Ticker Search"
          placeholder="Enter a Stock Ticker"
        />
        <Button login>Search</Button>
      </div>

      <br></br>

      <div className="tickerResults">
        <h2>Results</h2>
      </div>

    </div>
  )
}