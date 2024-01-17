import { useEffect, useState } from "react";
import { getProducts} from "../services";

import { collection, getDocs, doc, getDoc, getFirestore } from "firebase/firestore";

export const useGetProducts = (collectionName = "products") => {

  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection (db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      );
    });
  
  }, []);

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

export const useGetProductsByID = (collectionName = "products",id) =>{
  const [productData, setProductData] = useState([]);


  useEffect(() =>{

    const db = getFirestore();
    const docRef = doc(db, collectionName,id);

    getDoc(docRef).then((doc) => {
      setProductData({id: doc.id, ...doc.data()})
    })
   },[id])

return  {productData} 
}