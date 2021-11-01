import { useQuery } from "react-query";

const getBalance = () => {
  //can make axios requests in here
  return Promise.resolve({balance: 250});
}

export const useBalance = () => {
  return useQuery('balance', getBalance)
}