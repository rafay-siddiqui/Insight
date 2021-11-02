import axios from "axios";

const getBalance = async (user) => {
  const res = await axios.get(`http://localhost:8080/get/balance/${user}`);
      return res.data;
}

// function putBalance(user) {
//   return axios.put()
// }

// function updateBalance(user, setBalance) {
//   return axios.put
// }

export default getBalance;