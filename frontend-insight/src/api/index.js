import { useContext } from "react";
import { useQuery } from "react-query";
import { authContext } from "../providers/AuthProvider";


const getBalance = () => {
  // fetch('http://localhost:8080/get/balance', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ username }),
  // })
  //   .then(response => {
  //     return response.text();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   });
  return Promise.resolve({balance: 250})
}

export const useBalance = () => {
  return useQuery('balance', getBalance)
}

