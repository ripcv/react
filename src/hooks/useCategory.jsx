import { useEffect, useState } from "react";
import { getCategories } from "../services";

export const useGetCategories = () => {

  const [categorieData, setCategorieData] = useState([]);

  useEffect(() => {
    
    getCategories()
      .then(response => {
        setCategorieData(response)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return { categorieData }
}
