import axios from 'axios';

/**
 * @description Se usa esta api para mostrar el manejo y uso.
 * @returns valor actual a peso chileno del dolar
 */
export function getExchangeRate() {
    return axios
      .get('https://currency-exchange.p.rapidapi.com/exchange', {
        params: {
          from: 'USD',
          to: 'CLP',
          q: '1.0'
        },
        headers: {
          'X-RapidAPI-Key': '5b29f1a078msh348bf2721b324bfp16fd17jsn410343a03198',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }

