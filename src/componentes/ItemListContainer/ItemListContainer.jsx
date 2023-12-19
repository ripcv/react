import { useEffect, useState } from "react"
import { getExchangeRate } from "../../services/exchangeapi"
import { useGetCategories } from "../../hooks/useCategory"
import "./ItemListContainer.css"
import CategoryContainer from "../CategoryContainer/CategoryContainer"
import { Link } from "react-router-dom"
import { useExchange } from "../../hooks/useExchange"


const ItemListContainer = ({ productsData }) => {
  const {usd } = useExchange();
  const { categorieData } = useGetCategories();

return (

  <div className="tarjetas">
  <CategoryContainer categorieData={categorieData}/>
    <div className="producto" >
      {
        productsData.map(product => {
          return (
            <div key={product.id} className="tarjeta-producto">
              <Link to={`/tienda/producto/${product.id}`}><img src={`../../src/assets/images/tienda/${product.img}`} alt="" /></Link>
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
