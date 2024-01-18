import { useParams } from "react-router-dom"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import { useGetProducts, useGetProductsByCategory } from "../hooks/useProducts";

/**
 * @description Se renderizan Categorias y sus respectivos productos.
 */
function Category() {

    const { pathname } = location;
    const {id} = useParams();
    const useProductsHook = pathname.includes("/categoria") ? useGetProductsByCategory : useGetProducts;
    const { productsData } = useProductsHook(id);

  return (
    <section className="tienda">
    <h1 className="titulo__formato">Tienda Oficial La Grande Armée</h1>
    <ItemListContainer productsData={productsData} />
  </section>   

  )
}

export default Category