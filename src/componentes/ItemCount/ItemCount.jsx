import React, { useState } from 'react'
import './ItemCount.css'
function ItemCount(product) {
  
    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1)
    }

    const handleSumar = () => {
        cantidad < product.product.stock &&  setCantidad(cantidad+1)
    }

  return (
    <div className="item-count">
        <button className='boton-principal btn-cantidad' onClick={handleRestar}> - </button>
        <p className='cantidad'>{cantidad}</p>
        <button className='boton-principal btn-cantidad' onClick={handleSumar}> + </button>
    </div>
  )
}

export default ItemCount