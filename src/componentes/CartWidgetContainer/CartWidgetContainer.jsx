import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidgetContainer = () => {
  const { count } = useContext(CartContext);
  
  const mostrarCartCantidad = () => {
  let cantidadMostrar = 0;
  count.map((cantidad) =>{
         cantidadMostrar += cantidad.quantity;
  })
  return cantidadMostrar;
  }
  return (
    <div id="carrito" className="carrito">
    <div className="hide" id="mensaje"></div>
    <a href="./carrito.html"><div><FontAwesomeIcon icon={faCartShopping} /> {mostrarCartCantidad()} </div></a>
  </div>
  )
}

export default CartWidgetContainer