import { React, useState } from 'react';
import './StockQuote.scss'
import Button from '../components/Button'
import { hyperlinkTicker } from '../helper/fetchers';
import ExampleChart from './ExampleChart';

export default function StockQuote(props) {

  const [stockData, setStockData] = useState([])

  const generateGraph = (array) => {
    array.map(point => console.log(point))
  }

  const fetchData = (ticker) => {
    hyperlinkTicker(ticker)
      .then((res) => setStockData(res)
      )
      .then(res => generateGraph([...stockData]))
  }

  return (
    <div>
      <h2>Stock Quote</h2>
      <Button login onClick={() => fetchData(props.ticker)}>API Call</Button>
      <Button login onClick={() => console.log(stockData[5])}>Console Log</Button>
      {/* {stockData && <ExampleChart series={stockData}/>} */}
    </div>
  )
}