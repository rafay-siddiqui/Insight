import React, { useState, useContext, useEffect } from "react";
import TickerSearchBar from "../components/TickerSearchBar";
import { searchTicker, hyperlinkTicker } from "../helper/fetchers";
import TickerResult from "../components/TickerResult"
import './TickerLookup.scss'
import BuyStock from '../components/BuyStock';
import postPurchase from "../api/PostPurchase";
import checkStock from "../api/CheckStock";
import addStockList from "../api/AddStockList";
import { useQuery } from "react-query";
import { authContext } from "../providers/AuthProvider";
import getBalance from "../api/GetBalance";
import setBalance from "../api/SetBalance";

export default function TickerLookup(props) {
  const { user } = useContext(authContext);

  const [ticker, setTicker] = useState("")
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [stocksAmount, setStocksAmount] = useState(0)
  const [errorAmount, setErrorAmount] = useState(false)
  const [errorTicker, setErrorTicker] = useState(false)
  const [errorBalance, setErrorBalance] = useState(false)

  //updateBalance from purchase
  const balanceQuery = useQuery('balance', () => getBalance(user));

  const updateBalance = (amount) => {
    const balance = parseFloat(balanceQuery.data.balance) - parseFloat(amount);
    if (balance < 0) {
      setErrorBalance(true)
    } else {
      setErrorBalance(false)
      setTimeout(() => {
        setBalance(balance, 1);
        postPurchase(props.data.symbol, 1, props.data.historical[0].date, props.data.historical[0].close, parseInt(stocksAmount))
      }, 1000)
    }
  }

  const resultsShow = (event) => {
    event.preventDefault();
    searchTicker(ticker)
      .then((res) => {
        setResults(res)
        setShowResults(true)
      }
      )
  }

  const stockValidation = (ticker, stocksAmount) => {
    return checkStock(ticker.toUpperCase(), user)
      .then(res => {
        console.log('count from stocks table', res.count)
        if (res.count == 0) {
          addStockList(ticker.toUpperCase(), user)
        }
      })
  }

  const purchaseStock = (stocksAmount) => {
    setResults([]);
    setTicker("");

    stockValidation(props.data.symbol, stocksAmount)
    updateBalance(parseFloat(stocksAmount) * parseFloat(props.data.historical[0].close));
    setStocksAmount(0);
  }

  const purchaseValidation = () => {
    if (stocksAmount > 0) {
      setErrorAmount(false)
      return purchaseStock(stocksAmount)
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
      {errorBalance && <h5 className='purchase--error' >Insufficient Balance</h5>}
      <TickerSearchBar value={ticker} onChange={setTicker} onClick={resultsShow} />
      <div className="tickerResults">
        {/* Iterate similar ticker results from API */}
        {results.map(result => (
          <TickerResult onClick={() => { props.onClick(result.symbol); }} ticker={result.symbol} company={result.name} />
        ))}
      </div>
    </div>
  );

}