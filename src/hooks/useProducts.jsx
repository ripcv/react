import { useEffect, useState } from "react";
import { getProducts } from "../services";

export const useGetProducts = () => {

  const [productsData, setProductData] = useState([]);

  useEffect(() => {
    
    getProducts()
      .then(response => {
        setProductData(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return { productsData }
}
/* 
export const useGetProductById = (id) => {

  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProducts()
      .then(response => {
        setProductData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return { productsData }
}

 */