
import { useState,useEffect } from "react";

function useCurrencyInfo(currency)
{ 
     const [Data, setData] = useState({});
useEffect(() => {
  fetch(
  `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);    
      setData(res[currency]);
    });
}, [currency]);
return Data
}
export default useCurrencyInfo