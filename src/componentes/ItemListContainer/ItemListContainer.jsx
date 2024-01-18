import { useGetCategories } from "../../hooks/useProducts"
import "./ItemListContainer.css"
import CategoryContainer from "../CategoryContainer/CategoryContainer"
import { Link } from "react-router-dom"
import { useExchange } from "../../hooks/useExchange"


const ItemListContainer = ({ productsData }) => {
  const {usd } = useExchange();
  const { category } = useGetCategories();
return (

  <div className="tarjetas">
  <CategoryContainer categorieData={category}/>
    <div className="producto" >
      {
        productsData.map(product => {
          return ( 
            <div key={product.id} className="tarjeta-producto">
              <Link to={`/tienda/producto/${product.id}`}>
               <img src={`../../src/assets/images/tienda/${product.img}`} alt="" /> </Link>
              <h5>{product.nombreProducto}</h5>
              <p>{product.descripcion}</p>
              <span>{Math.floor(product.valor/usd)} USD - ${product.valor} CLP. </span>
              <Link to={`/tienda/producto/${product.id}`}> <button type="button" className="boton-principal">Ver Más</button></Link>
              
            </div>
          )
        })
      }
    </div>
  </div>
)
}

export default ItemListContainer
