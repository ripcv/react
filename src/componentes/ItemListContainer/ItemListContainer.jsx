import { getExchangeRate } from "../../services/exchangeapi"

const ItemListContainer = ({ productsData }) => {
  const usd = getExchangeRate()
  
  console.log(productsData);
  return (

    <div className="tarjetas">
      <div className="producto" >
        {
          productsData.map(product => {
            return (
                <div key={product.id}>
                <div className="tarjeta-producto">
                      <img src={`../../src/assets/images/tienda/${product.img}`} alt="" />
                        <h5>{product.nombreProducto}</h5>
                        <p>{product.descripcion}</p>
                        <span>${product.valor}</span>
                        <button type="button" className="boton-principal">Comprar</button>
                    </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ItemListContainer
