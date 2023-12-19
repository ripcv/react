import { useExchange } from "../hooks/useExchange";
import { useGetProductsByID } from "../hooks/useProducts";
import { Link, useParams } from "react-router-dom";
import './Producto.css'
import ItemCount from "../componentes/ItemCount/ItemCount";

/* 
posible futura funcionalidad
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"; */

/**
 * @description Renderiza producto por ID
 */

const Producto = () => {
    const { usd } = useExchange();
    const { id } = useParams();
    const { productData } = useGetProductsByID(id)


    return (

        <div  className="product-page">
         
            {
              productData.map(product => {
                
                return (
                    <div key={product.id} className="single-product" >
                    <img className="product-imagen"src={`../../src/assets/images/tienda/${product.img}`} alt="" />
                  {/*   
                    posible futura funcionalidad
                  <div className="control-product">
                    <Link to={`/tienda/producto/${product.id-1}`}><FontAwesomeIcon icon={faArrowLeft} /></Link>
                    <Link to={`/tienda/producto/${product.id+1}`}><FontAwesomeIcon icon={faArrowRight} /> </Link>
                    </div> */}
                    <div>
                    <div className="titulo__formato titulo-producto"><h1>{product.nombreProducto}</h1></div>
                    <div className="product-content">
                    <p>{product.descripcion}</p>
                    <span>Precio: {Math.floor(product.valor/usd)} USD - ${product.valor} CLP. </span>
                    <div className="product-select">
                    <ItemCount product={product}/>
                    <button type="button" className="boton-principal btn-product">Comprar</button>
                    </div>
                    </div>
                </div>
                  </div>
                )
              })
            }
        </div>
      )
}

export default Producto