import axios from "axios";

const setBalance = async (balance, user) => {
  const res = await axios.put(`http://localhost:8080/set/balance/${user}`, { balance }, );
      return res.data;
}

export default setBalance;