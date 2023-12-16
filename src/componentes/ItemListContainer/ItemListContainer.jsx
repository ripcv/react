import { useEffect, useState } from "react"
import { getExchangeRate } from "../../services/exchangeapi"
import "./ItemListContainer.css"

const ItemListContainer = ({ productsData }) => {
  const [usd, setUsd] = useState(0);

  useEffect(()=> {
    getExchangeRate()
    .then((res) => {
      setUsd(res)
    })
    .catch ((error) => {
      console.log(error)
      });
    }, []);


return (

  <div className="tarjetas">
    <div className="producto" >
      {
        productsData.map(product => {
          return (
            <div key={product.id} className="tarjeta-producto">
              <img src={`../../src/assets/images/tienda/${product.img}`} alt="" />
              <h5>{product.nombreProducto}</h5>
              <p>{product.descripcion}</p>
              <span>{Math.floor(product.valor/usd)} USD - ${product.valor} CLP. </span>
              <button type="button" className="boton-principal">Comprar</button>
            </div>
          )
        })
      }
    </div>
  </div>
)
}

export default ItemListContainer
