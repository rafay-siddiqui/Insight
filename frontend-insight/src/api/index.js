import { useQuery } from "react-query";

const getBalance = (username) => {
  fetch('http://localhost:8080/get/balance', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  })
    .then(response => {
      return response.text();
    })
    .then(data => {
      console.log('balance yeahhhh: ', JSON.parse(data)[0]);
    });


  // return Promise.resolve({balance: 250})
}

export const useBalance = (username) => {
  return useQuery('balance', getBalance(username))
}

