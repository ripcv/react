import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { useGetProductsByID } from '../../hooks/useProducts';

/**
 * 
 * @returns Se muestran los productos del carrito y se calcula el total
 */

const ProductsCarContainer = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [iva, setIva] = useState(0);
  const { productosCarrito } = useContext(CartContext);
  const divisa = '$';

  /*Para mostrar el detalle del carrito con sus respectivos valores se crea un array nuevo en el cual se almacena
 la informacion de cada producto obtenida desde firebase.
 */
  const detalleCarrito = productosCarrito.map((producto) => {
    const { productData } = useGetProductsByID("products", producto.id);
    const { nombreProducto, valor } = productData;
    const total = parseInt(valor * producto.quantity);

    return {
      ...producto,
      nombre: nombreProducto,
      valor: parseInt(valor),
      total,
    };
  });

// Se calcula el subtotal y su respectivo Iva por cada producto que tenga el carrito.
  useEffect(() => {
    const total = detalleCarrito.reduce((totalPrevio, { total }) => totalPrevio + total, 0);
    setSubTotal(total)
    const IVA = subTotal * 0.19
    setIva(IVA)
  }, [detalleCarrito]);



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
              {productosCarrito.length > 0 ? (
                detalleCarrito.map((producto) => {
                  if (producto.total) {
                    return (
                      <tr key={producto.id}>
                        <td scope="col">{producto.nombre}</td>
                        <td scope="col">
                          <input
                            className="cantidad-input"
                            name="cantidad"
                            type="number"
                            value={producto.quantity}
                            data-productid={producto.id}
                          />
                        </td>
                        <td scope="col">{divisa + producto.valor}</td>
                        <td scope="col" id={producto.id}>
                          {divisa + producto.total}
                        </td>
                      </tr>
                    );
                  }
                })
              ) : (
                <tr>
                  <td colSpan="4">El carrito está vacío</td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
        <div className="total-container" id="total-container">
          <div className="total-item">Subtotal: <span id="subtotal">{subTotal ? divisa + subTotal : 0}</span></div>
          <div className="total-item">IVA: <span id="iva">{iva ? divisa + iva : 0}</span></div>
          <div className="total-item">TOTAL: <span id="total">{subTotal ? divisa + (subTotal + iva) : 0}</span></div>
          <button type="submit" id="finalizarcompra" className="boton-principal">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarContainer;
