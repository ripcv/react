import { useParams } from "react-router-dom"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import { useGetProductsByCategory } from "../hooks/useProducts";

function Category() {

    const {id} = useParams();
  const { productsData } = useGetProductsByCategory(id);

  return (
    <section className="tienda">
    <h1 className="titulo__formato">Tienda Oficial La Grande Armée</h1>
    <ItemListContainer productsData={productsData} />
  </section>   

  )
}

export default Category