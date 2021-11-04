import axios from 'axios';

export default function insertStockData(ticker, date, price) {

  axios.post(`http://localhost:8080/add/stockdata`, {
    ticker,
    date,
    price
  })
    .then((res) => res)
};