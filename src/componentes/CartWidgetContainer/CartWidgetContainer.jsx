import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidgetContainer = () => {
  const { productosCarrito } = useContext(CartContext);
  const totalQuantity = productosCarrito.reduce((total, item) => total + item.quantity, 0);
  return (
    <div id="carrito" className="carrito">
      <div className="hide" id="mensaje"></div>
      <Link to="/tienda/checkout"><div><FontAwesomeIcon icon={faCartShopping} /> {totalQuantity} </div></Link>
    </div>
  )
}

export default CartWidgetContainer