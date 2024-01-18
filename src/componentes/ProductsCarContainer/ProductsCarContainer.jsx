import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { useGetProductsByID } from '../../hooks/useProducts';

const ProductsCarContainer = () => {
  const [subTotal, setSubTotal] = useState(0);
  const { productosCarrito } = useContext(CartContext);

   const handleChange = (()=> {
    console.log("cambio la cantidad")
   })

 
  
  return (
    <div className="carro">
      <div className="productos">
        <div className="hide" id="mensaje"></div>
        <div id="carrito" className="producto-en-carrito">
          <table className="tabla-resumen">
            <thead className="text-center">
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {productosCarrito.map((producto) => {
                const detalleProducto = useGetProductsByID("products", producto.id);
                const total = parseInt(detalleProducto.productData.valor * producto.quantity);
                
                return (
                  <tr key={producto.id}>
                    <td scope="col">{detalleProducto.productData.nombreProducto}</td>
                    <td scope="col">
                    <input
                        className="cantidad-input"
                        name="cantidad"
                        type="number"
                        value={producto.quantity}
                        data-productid={producto.id}
                        onChange={handleChange}
                      />
                    </td>
                    <td scope="col">{detalleProducto.productData.valor}</td>
                    <td scope="col" id={producto.id}>
                      {total}
                    </td>
                  </tr>
                );

             
                })}
            </tbody>
          </table>
        </div>
        <div className="total-container" id="total-container">
          <div className="total-item">Subtotal: <span id="subtotal">{subTotal}</span></div>
          <div className="total-item">IVA: <span id="iva">0</span></div>
          <div className="total-item">TOTAL: <span id="total">0</span></div>
          <button type="button" id="finalizarcompra" className="boton-principal">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarContainer;
