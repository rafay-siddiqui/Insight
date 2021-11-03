import axios from "axios";

const getStockList = async (user) => {
  const res = await axios.get(`http://localhost:8080/get/stocklist/${user}`);
  console.log(res.data)
  return res.data;
}

export default getStockList;