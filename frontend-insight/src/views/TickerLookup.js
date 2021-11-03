import React, { useState, useContext } from "react";
import TickerSearchBar from "../components/TickerSearchBar";
import { searchTicker, hyperlinkTicker } from "../helper/fetchers";
import TickerResult from "../components/TickerResult"
import './TickerLookup.scss'
import BuyStock from '../components/BuyStock';
import postPurchase from "../api/PostPurchase";
import checkStock from "../api/CheckStock";
import addStockList from "../api/AddStockList";
import { useMutation } from "react-query";
import { authContext } from "../providers/AuthProvider";

export default function TickerLookup(props) {

  const { user } = useContext(authContext);

  const [ticker, setTicker] = useState("")
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [stocksAmount, setStocksAmount] = useState(0)
  const [errorAmount, setErrorAmount] = useState(false)
  const [errorTicker, setErrorTicker] = useState(false)

  const createGraph = (event) => {
    event.preventDefault();
    searchTicker(ticker)
      .then((res) => {
        setResults(res)
        setShowResults(true)
      }
      )
  }

  // const purchaseStock = useMutation(() => postPurchase(props.data.symbol, 1, props.data.historical[0].date, props.data.historical[0].close, stocksAmount))

  const stockValidation = (ticker, stocksAmount) => {
    return checkStock(ticker.toUpperCase(), user)
      .then(res => {
        if (res.count == 0) {
          addStockList(ticker.toUpperCase(), user)
        }
      })
  }
  
  const purchaseStock = (ticker, stocksAmount) => {
    setResults([]);
    setTicker("");
    setStocksAmount(0);
    stockValidation(ticker, stocksAmount)
    postPurchase(props.data.symbol, 1, props.data.historical[0].date, props.data.historical[0].close, parseInt(stocksAmount))
  }

  const purchaseValidation = () => {
    if (stocksAmount > 0) {
      setErrorAmount(false)
      return purchaseStock(ticker, stocksAmount)
    } else {
      setErrorAmount(true)
    }
  }


  return (
    <div className="tickerLookup">
      {showResults && <h2>Results</h2>}
      {(props.data && results.length > 0) && <BuyStock value={stocksAmount} onChange={setStocksAmount} onClick={purchaseValidation} />}
      {errorAmount && <h5 className='purchase--error' >Must select positive number of stocks</h5>}
      {errorTicker && <h5 className='purchase--error' >Must a stock</h5>}
      <TickerSearchBar value={ticker} onChange={setTicker} onClick={createGraph} />
      <div className="tickerResults">
        {/* Iterate similar ticker results from API */}
        {results.map(result => (
          <TickerResult onClick={() => { props.onClick(result.symbol); }} ticker={result.symbol} company={result.name} />
        ))}
      </div>
    </div>
  );

}