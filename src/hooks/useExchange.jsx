import { useEffect, useState } from "react";
import { getExchangeRate } from "../services/exchangeapi";

export const useExchange = () => {

    const [usd, setUsd] = useState(0);

    useEffect(()=> {
        getExchangeRate()
        .then((res) => {
          setUsd(res)
          console.log(res)
        })
        .catch ((error) => {
          console.log(error)
          });
        }, []);

    
    return {usd};
}