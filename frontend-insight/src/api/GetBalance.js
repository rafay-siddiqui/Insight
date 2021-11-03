import axios from "axios";

const getBalance = async (user) => {
  const res = await axios.get(`http://localhost:8080/get/balance/${user}`);
  return res.data;
}

export default getBalance;