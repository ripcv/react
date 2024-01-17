//Estilos
import './App.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainRouter } from './router/MainRouter';
import { CartProvider } from './context/CartContext';



const App = () => {


  return (
    <CartProvider>
      <MainRouter />
    </CartProvider>
  )

}

export default App
