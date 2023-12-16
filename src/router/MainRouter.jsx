import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from '../componentes/NavBarComponent/NavBarComponent'
import  Home   from '../pages/Home'
import  Tienda   from '../pages/Tienda'
//import  { ItemDetailContainer } from '../pages/ItemDetailContainer'
import Category from '../pages/Category'


export const MainRouter = () => {
    return (
        <BrowserRouter>
         <NavBarComponent/>
            <Routes>
               <Route  path='/' element={<Home />} />
               <Route  path='/Tienda' element={<Tienda />} />
               {/*   <Route  path='item/:productId' element={<ItemDetailContainer />} />
                <Route  path='/category/:id' element={<Category/>} />
            */} </Routes>
        </BrowserRouter>
    )
}