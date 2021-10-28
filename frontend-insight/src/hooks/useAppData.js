import axios from "axios";

const myApiKey = process.env.REACT_APP_FINANCIAL_MODELING_API

export default function searchTicker(ticker) {
  return axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?apikey=${myApiKey}`)
    .then((res) => res.data.historical)
}