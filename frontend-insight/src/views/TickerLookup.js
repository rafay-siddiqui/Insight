import React, { useState, useContext } from "react";
import TickerSearchBar from "../components/TickerSearchBar";
import { searchTicker, hyperlinkTicker } from "../helper/fetchers";
import TickerResult from "../components/TickerResult"
import './TickerLookup.scss'
import BuyStock from '../components/BuyStock';
import postPurchase from "../api/PostPurchase";
import checkStock from "../api/CheckStock";
import { useMutation } from "react-query";
import { authContext } from "../providers/AuthProvider";

export default function TickerLookup(props) {

  const { user } = useContext(authContext);

  const [ticker, setTicker] = useState("")
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [stocksAmount, setStocksAmount] = useState(0)

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
  const purchasePosting = () => {
    setResults([]);
    setTicker("");
    setStocksAmount(0);
    return postPurchase(props.data.symbol, 1, props.data.historical[0].date, props.data.historical[0].close, parseInt(stocksAmount));
  }

  const stockValidation = () => {
    return checkStock(ticker, user)
    .then(res => {
      console.log(res.count)
      if (res.count == 0) {
        console.log('new stock')
      } else {
        console.log('existing stock')
      }
    })
  }

  const purchaseStock = () => {
    stockValidation()
    purchasePosting()
  }


  return (
    <div className="tickerLookup">
      {showResults && <h2>Results</h2>}
      {(props.data && results.length > 0) && <BuyStock value={stocksAmount} onChange={setStocksAmount} onClick={purchaseStock} />}
      <TickerSearchBar value={ticker} onChange={setTicker} onClick={createGraph} />
      <div className="tickerResults">
        {/* Iterate similar ticker results from API */}
        {results.map(result => (
          <TickerResult onClick={() => { props.onClick(result.symbol); }} ticker={result.symbol} company={result.name} />
        ))}
      </div>
      {purchaseStock.isSuccess && <h5>Success!</h5>}
      {purchaseStock.isError && <h5>Error!</h5>}
    </div>
  );

}