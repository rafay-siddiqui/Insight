import axios from "axios";

export default function getBalance(user, setBalance) {
  return axios.get(`http://localhost:8080/get/balance/${user}`)
      .then((res) => {
        setBalance(res.data[0].balance)
      });
}

// function updateBalance(user, setBalance) {
//   return axios.put
// }