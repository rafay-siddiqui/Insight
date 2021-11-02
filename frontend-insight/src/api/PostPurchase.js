import axios from 'axios';

export default function postPurchase(stockTicker, userID, date, purchasePrice, numberOfStocks) {
  console.log({ stockTicker, userID, date, purchasePrice, numberOfStocks })

  axios.post(`http://localhost:8080/add/purchase`, {
    stockTicker,
    userID,
    date,
    purchasePrice,
    numberOfStocks
  })
  .then((res) => res)

  // fetch('http://localhost:8080/add/purchase', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ stockTicker, userID, date, purchasePrice, numberOfStocks }),
  // })
  //   .then(response => {
  //     return response.text();
  //   })
  //   .then(data => {
  //     alert(data);
  //   });
};

