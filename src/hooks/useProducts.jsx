import { useEffect, useState } from "react";

import { collection, getDocs, doc, where, getDoc,query, getFirestore } from "firebase/firestore";

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


export const useGetCategories = (collectionName = 'category') => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);

    getDocs(productsCollection).then((snapshot) => {
      const categorias = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setCategory(
        categorias[0].categorias
      )
    });
  }, []);
  return { category };
};

export const useGetProductsByCategory = (category, collectionName = "products") => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, collectionName);
    const q = query(productsCollection, where("categoria", "==", category));

    getDocs(q).then((snapshot) => {
      setProductsData(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  }, [category]);

  return { productsData };
};

 