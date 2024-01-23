import React, { useContext, useEffect, useState } from 'react'
import './ItemCount.css'
import { CartContext } from '../../context/CartContext';
import { Toast, NotificacionesContainer } from '../NotificacionesContainer/NotificacionesContainer';


function ItemCount(product) {


  const [cantidad, setCantidad] = useState(1);

  const { productosCarrito, setCarrito } = useContext(CartContext);

  /* Se emula la rebaja de stock del producto al agregar un producto al carro, 
 esto con la finalidad de agotar productos o evitar que agreguen más del stock disponible si este ya se encuentra agregado.
 */

  const cantidadDisponible = (productosCarrito, productId, stock) => {
    const cantidadEnCarrito = productosCarrito
      .filter(item => item.id === productId)
      .reduce((total, item) => total + item.quantity, 0);

    return stock - cantidadEnCarrito;
  };
  const stock = cantidadDisponible(productosCarrito, product.product.id, product.product.stock);


  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    if (stock > cantidad) {
      setCantidad(cantidad => (cantidad < stock ? cantidad + 1 : stock));
    } else {
      Toast.warn("Stock Maximo Disponible")
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
    Toast.success('Producto Agregado')
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
        <NotificacionesContainer/>
      </div>
      <div>
        <h3 style={isAgotado() ? {} : { display: 'none' }}>Producto Agotado</h3>
      </div>
    </div>
  )
}

export default ItemCount