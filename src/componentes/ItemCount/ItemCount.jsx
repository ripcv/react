import React, { useContext, useState } from 'react'
import './ItemCount.css'
import { CartContext } from '../../context/CartContext';
function ItemCount(product) {

  const [cantidad, setCantidad] = useState(1);

  const {productosCarrito, setCarrito} = useContext(CartContext);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < product.product.stock ? setCantidad(cantidad + 1) : alert('Ha alcanzado el limite disponible');

  }
  
 const handleProductAddCart = () => {
  console.log("aprete el boton")
    const newProduct = {
      id: product.product.id,
      quantity: cantidad,
    };
    if(productosCarrito.length=== 0){
      setCarrito([newProduct])
      console.log(productosCarrito);
    }else if(productosCarrito.find(producto => producto.id === newProduct.id)){
      const updatedCart = productosCarrito.map(item => 
        item.id === newProduct.id ? { ...item, quantity: item.quantity + cantidad } : item
      );
      setCarrito(updatedCart);
    }else{
      setCarrito([...productosCarrito,newProduct]);
    }
    setCantidad(1);
  }; 

  return (
    <div>
      <div className="item-count">
        <button className='boton-principal btn-cantidad' onClick={handleRestar}> - </button>
        <p className='cantidad'>{cantidad}</p>
        <button className='boton-principal btn-cantidad' onClick={handleSumar}> + </button>
      </div>
      <button onClick={handleProductAddCart} type="button" className="boton-principal btn-product">Comprar </button>
    </div>


  )
}

export default ItemCount