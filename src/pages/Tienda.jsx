import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import { useGetProducts } from "../hooks/useProducts"


function Tienda() {

  const { productsData } = useGetProducts();

  return (
    <section className="tienda">
      <h1 className="titulo__formato">Tienda Oficial La Grande Armée</h1>
      <ItemListContainer productsData={productsData} />
    </section>
  )
}

export default Tienda