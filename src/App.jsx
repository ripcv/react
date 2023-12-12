//Estilos
import './App.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes
import { useEffect, useState } from 'react';
import NavBarComponent from './componentes/NavBarComponent/NavBarComponent';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { getProducts } from './services';



const App = () => {

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

  return (
    <div>
      <NavBarComponent />
      <ItemListContainer productData={productData}/>
    </div>
  )

}

export default App
