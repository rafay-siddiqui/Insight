import axios from "axios";

const myApiKey = process.env.REACT_APP_FINANCIAL_MODELING_API

export default function searchTicker(ticker) {
  return axios.get(`https://financialmodelingprep.com/api/v3/search?query=${ticker.toUpperCase()}&limit=100&apikey=${myApiKey}`)
    .then((res) => res.data)
}

// 