import {React, useState} from "react";
import TickerLookup from "./TickerLookup";
import StockQuote from "./StockQuote";
import { hyperlinkTicker } from "../helper/fetchers";
import TabView from "../components/TabView";

export default function MainView() {
  const [displayStock, setDisplayStock] = useState('');

  const showStock = (ticker) => {

    hyperlinkTicker(ticker)
      .then((res) => setDisplayStock(res)
      )
  }

  return (
    <div>
      <div>
        <TabView></TabView>
      </div>

      <div style={{ display: "flex" }} className='portfolioDiv'>

        <StockQuote data={displayStock} />
        {/* <Portfolio></Portfolio> */}


        <TickerLookup onClick={showStock} ></TickerLookup>

      </div>
    </div>
  )
}