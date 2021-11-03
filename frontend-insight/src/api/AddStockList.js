import axios from 'axios';

export default function addStockList(ticker, user) {

  axios.post(`http://localhost:8080/add/stock`, {
    ticker,
    user
  })
    .then((res) => res)
};
