import React, { useContext, useState } from 'react'
import './ItemCount.css'
import { CartContext } from '../../context/CartContext';
function ItemCount(product) {

  const [cantidad, setCantidad] = useState(1);

  const { productosCarrito, setCarrito } = useContext(CartContext);

  const cantidadDisponible = (productosCarrito, productId, stock) => {

    return stock - productosCarrito.reduce((total, item) => {
      if (item.id === productId) {
        return total + item.quantity;
      }
      return total;
    }, 0);

  };

  const stock = cantidadDisponible(productosCarrito, product.product.id, product.product.stock);


  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {

    if (stock > 0) {
      setCantidad(cantidad => (cantidad < stock ? cantidad + 1 : stock));
    } else {
      alert('Ha alcanzado el límite disponible');
    }
  };


  const handleProductAddCart = () => {
    const newProduct = {
      id: product.product.id,
      quantity: cantidad,
    };
    if (productosCarrito.length === 0) {
      setCarrito([newProduct])
    } else if (productosCarrito.find(producto => producto.id === newProduct.id)) {

      const updatedCart = productosCarrito.map(item =>
        item.id === newProduct.id
          ? { ...item, quantity: Math.min(item.quantity + cantidad, product.product.stock) }
          : item
      );

      setCarrito(updatedCart);
    } else {
      setCarrito([...productosCarrito, newProduct]);
    }
    setCantidad(1);
  };

  const isAgotado = () => {
    return stock < 1;
  }

  return (
    <div>
      <div style={isAgotado() ? { display: 'none' } : {}}>
        <div className="item-count" >
          <button className='boton-principal btn-cantidad' onClick={handleRestar}> - </button>
          <p className='cantidad'>{cantidad}</p>
          <button className='boton-principal btn-cantidad' onClick={handleSumar}> + </button>
        </div>
        <button onClick={handleProductAddCart} type="button" className="boton-principal btn-product">Comprar </button>
      </div>
      <div>
        <h3 style={isAgotado() ? {} : { display: 'none' }}>Producto Agotado</h3>
      </div>
    </div>
  )
}

export default ItemCount