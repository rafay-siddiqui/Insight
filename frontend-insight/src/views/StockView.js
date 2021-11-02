import {React, useState} from "react";
import TickerLookup from "./TickerLookup";
import StockQuote from "./StockQuote";
import { hyperlinkTicker } from "../helper/fetchers";


export default function StockView() {
  const [displayStock, setDisplayStock] = useState('');

  const showStock = (ticker) => {

    hyperlinkTicker(ticker)
      .then((res) => setDisplayStock(res)
      )
  }

  return (
    <div>
      

      <div style={{ display: "flex" }} className='portfolioDiv'>

        <StockQuote data={displayStock} />
        {/* <Portfolio></Portfolio> */}


        <TickerLookup onClick={showStock} data={displayStock}></TickerLookup>

      </div>
    </div>
  )
}