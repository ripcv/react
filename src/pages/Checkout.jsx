import './Checkout.css'
import ProductsCarContainer from '../componentes/ProductsCarContainer/ProductsCarContainer'
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
   const { productosCarrito, setCarrito } = useContext(CartContext);
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (productosCarrito.length === 0){
            alert("Ingrese Productos al Carrito")
            
        }else if(nombre && direccion && correo && telefono) {
            alert("Compra Exitosa.")
            setCarrito([]);
            history('/tienda')
        }
        else {
            alert("Ingrese los datos del comprador.")
          
        }
    };

   
    return (
        <div className="checkout-page">
            <h1 className="titulo__formato">Carrito de Compras</h1>
            <section className="contenido contenido-carrito">
                <form onSubmit={handleSubmit} className="formFinalizarCompra">
                    <div className="datos-comprador" id="datos-comprador">
                        <h3>Datos Comprador</h3>
                        <label htmlFor="nombreUsuario">Nombre</label>
                        <input type="text" className="input-text" name="nombreUsuario" value={nombre} onChange={(e) => setNombre(e.target.value)} />

                        <label htmlFor="direccionUsuario">Direccion Envio</label>
                        <input type="text" className="input-text" name="direccionUsuario" id="direccionUsuario" placeholder="Ingresa la direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                        <label htmlFor="correoUsuario">Correo</label>
                        <input type="text" className="input-text" name="correoUsuario" id="correoUsuario" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        <label htmlFor="telefonoContacto">Telefono</label>
                        <input type="text" className="input-text" name="telefonoContacto" id="telefonoContacto" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <ProductsCarContainer />
                </form>
            </section>
        </div>
    )
}
export default Checkout