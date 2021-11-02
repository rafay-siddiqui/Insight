import axios from 'axios';

export default function postPurchase(stockTicker, userID, date, purchasePrice, numberOfStocks) {
  console.log({stockTicker, userID, date, purchasePrice, numberOfStocks})
  axios.post(`http://localhost:8080/add/purchase`, JSON.stringify({
    stockTicker,
    userID,
    date,
    purchasePrice,
    numberOfStocks
  }))
  .then((res) => res)
};