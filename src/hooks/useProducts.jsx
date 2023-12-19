import { useEffect, useState } from "react";
import { getProducts} from "../services";

export const useGetProducts = () => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    
    getProducts()
      .then(response => {
        setProductsData(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return { productsData }
}

export const useGetProductsByCategory = (category) => {
   const [productsData, setProductsData] = useState([]);

   useEffect(() =>{
    getProducts()
    .then(response => {
      setProductsData(response.filter((prod) => prod.categoria === category));
    })
    .catch(error => {
      console.log(error)
    })
   },[category])

return  {productsData} 
}