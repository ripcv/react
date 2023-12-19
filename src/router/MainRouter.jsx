import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from '../componentes/NavBarComponent/NavBarComponent'
import Home from '../pages/Home'
import Tienda from '../pages/Tienda'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import Categorias from '../pages/Categorias'


export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tienda' element={<Tienda />} />
                <Route path='/producto/:productId' element={<ItemDetailContainer />} />
                <Route path='/tienda/categoria/:id' element={<Categorias />} />
            </Routes>
        </BrowserRouter>
    )
}