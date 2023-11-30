import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const carrito = <FontAwesomeIcon icon={faCartShopping} />

function CartWidgetContainer() {
  return (
    <div id="carrito" className="carrito">
    <div className="hide" id="mensaje"></div>
    <a href="./carrito.html"><div>{carrito} 0</div></a>
  </div>
  )
}

export default CartWidgetContainer