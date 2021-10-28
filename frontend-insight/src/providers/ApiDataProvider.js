import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

const myApiKey = process.env.REACT_APP_FINANCIAL_MODELING_API

export const apiDataContex = createContext({
  data: []
});

export function ApiDataProvider(props) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?apikey=${myApiKey}`)
      .then((res) => setData(res.data.historical))
  });

  return (
    <apiDataContex.Provider value={data}>
      {props.children}
    </apiDataContex.Provider>
  )
}