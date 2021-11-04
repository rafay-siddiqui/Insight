import axios from "axios";

const getStockData = async (ticker) => {
  const res = await axios.get(`http://localhost:8080//get/stockdata/${ticker.toUpperCase()}`);
  return res.data;
}

export default getStockData;