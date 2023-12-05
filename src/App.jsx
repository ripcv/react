//Estilos
import './App.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Componentes
import NavBarComponent from './componentes/NavBarComponent/NavBarComponent';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App() {
return(
  <div>
    <NavBarComponent/>
    <ItemListContainer greeting = {"Página y Tienda oficial de La Grande Armée"}/>
  </div>
)
  
}

export default App
