import axios from 'axios';

const PostPurchase = async (stockTicker, userID, date, purchasePrice, numberOfStocks) => {
  const res = await axios.post(`http://localhost:8080/add/purchase`, {
    stockTicker,
    userID,
    date,
    purchasePrice,
    numberOfStocks
  });
  console.log(stockTicker, userID, date, purchasePrice, numberOfStocks)
  return res;
}

export default PostPurchase;