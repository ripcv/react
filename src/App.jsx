import NavBarComponent from './componentes/NavBarComponent/NavBarComponent';

//Estilos
import './App.css'
// Importación CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
return(
  <div>
    <NavBarComponent/>
    <ItemListContainer/>
  </div>
)
  
}

export default App
