import axios from 'axios'

const checkStock = async (ticker, user) => {
  const res = await axios.get(`http://localhost:8080/checkstock/${ticker}/${user}`);
  return res.data;
}

export default checkStock;