import { useExchange } from "../hooks/useExchange";
import { useGetProductsByID } from "../hooks/useProducts";
import { useParams } from "react-router-dom";
import './Producto.css'
import ItemCount from "../componentes/ItemCount/ItemCount";

/**
 * @description Renderiza producto por ID
 */

const Producto = () => {
  const { usd } = useExchange();
  const { id } = useParams();
  const { productData } = useGetProductsByID("products", id)

  if (usd) {
    return (

      <div className="product-page">
        <div key={productData.id} className="single-product" >
          <img className="product-imagen" src={`../../src/assets/images/tienda/${productData.img}`} alt="" />
          <div>
            <div className="titulo__formato titulo-producto"><h1>{productData.nombreProducto}</h1></div>
            <div className="product-content">
              <p>{productData.descripcion}</p>
              <span>Precio: {Math.floor(productData.valor / usd)} USD - ${productData.valor} CLP. </span>
              <div className="product-select">
                <ItemCount product={productData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (<div className="product-page">
      <h3>Cargando Datos...</h3>
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>)
  }
}

export default Producto