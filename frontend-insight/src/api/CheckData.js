import axios from 'axios'

const checkData = async (ticker, user) => {
  const res = await axios.get(`http://localhost:8080//checkdata/${ticker}`);
  return res.data;
}

export default checkData;