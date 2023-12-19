import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBarComponent from '../componentes/NavBarComponent/NavBarComponent'
import Home from '../pages/Home'
import Tienda from '../pages/Tienda'
import Categorias from '../pages/Categorias'
import Producto from '../pages/Producto'


export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBarComponent />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tienda' element={<Tienda />} />
                <Route path='/tienda/producto/:id' element={<Producto />} />
                <Route path='/tienda/categoria/:id' element={<Categorias />} />
            </Routes>
        </BrowserRouter>
    )
}