import React, { useContext, useState } from 'react'
import './ItemCount.css'
import { CartContext } from '../../context/CartContext';
function ItemCount(product) {

  const [cantidad, setCantidad] = useState(1);

  const {count, setCount} = useContext(CartContext);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < product.product.stock ? setCantidad(cantidad + 1) : alert('Ha alcanzado el limite disponible');

  }
  
 const handleProductAddCart = () => {
    const newProduct = {
      id: product.product.id,
      quantity: cantidad,
    };
    if( count.length  === 0){
    setCount([newProduct]);
    }else{
      count.map((item) => {
        if(item.id === product.product.id){
          return{
            ...item,
            quantity: item.quantity + cantidad,
          };
        }else{
          setCount([...count, newProduct]);
        }
      })
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