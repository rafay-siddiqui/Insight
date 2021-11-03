import axios from "axios";

const myApiKey = process.env.REACT_APP_FINANCIAL_MODELING_API

function searchTicker(ticker) {
  return axios.get(`https://financialmodelingprep.com/api/v3/search?query=${ticker.toUpperCase()}&limit=356&apikey=${myApiKey}`)
    .then((res) => res.data)
}

// function hyperlinkTicker(ticker) {
//   return axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?serietype=line&apikey=${myApiKey}`)
//     .then((res) => (res.data))
// }

function hyperlinkTicker(ticker) {
  return axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${ticker}?timeseries=1000&apikey=${myApiKey}`)
    .then((res) => res.data)
}

// function hyperlinkTicker(ticker) {
//   return axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/1min/${ticker}?apikey=${myApiKey}`)
//     .then((res) => res.data)
// }



export { searchTicker, hyperlinkTicker };

